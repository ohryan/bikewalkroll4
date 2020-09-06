import schoolMapMarker from '@/utils/schoolMapMarker';

export default class schoolMap {
    /**
     * Construct the school map.
     * 
     * Available params:
     * - Callbacks
     *  - idleCallback: callback for the map's `idle` event.
     *  - boundChangedCallback: callback for the map's `bound_changed` event. 
     * - Controls:
     *  - mapTypeControl: enable map/satelite control (default: false)
     *  - fullscreenControl: enable fullscreen button (default: false)
     *  - zoomControl: enable zoom control (default: false)
     * - Positioning
     *  - lat: centerpoint lat
     *  - lng: centerpoint lng
     *  - zoom: starting zoom level (default: 14)
     *  - zoomIconSizeTransition: zoom level were icons transition from big to small (default: 12)
     * 
     * @param {*} mapEl Map HTML Element
     * @param {*} params Configuration parameters
     * 
     */
    constructor(mapEl, params = {}) {
        this.loading = false;
        this.mapEl = mapEl;
        this.params = params;
        this.mapOptions = {
            scaleControl: false,
            streetViewControl: false,
            fullscreenControl: this.params.fullscreenControl ?? false,
            zoom: this.params.zoom ?? 14,
            zoomControl: this.params.zoomControl ?? false,
            mapTypeControl: this.params.mapTypeControl ?? false,
        };
        this.zoomIconSizeTransition = this.params.zoomIconSizeTransition ?? 12;

        this.idleCallback = this.params.idleCallback ?? null;
        this.boundsChangedCallback = this.params.boundsChangedCallback ?? null;
        this.markers = null;
        this.mapObj = null;

        this.drawMap();
        this.addListeners();
        return this;
    }

    /**
     * Draw the to HTML.
     */
    drawMap() {
        this.mapObj = new google.maps.Map(this.mapEl, this.mapOptions);
        this.setCenterLatLng();
        this.styleMap();
        this.enableBikeLayer();
    }
    
    /**
     * Style the map. 
     * Disabling a few default items that clutter up the map.
     */
    styleMap() {
		var styleOptions = [{
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [{ "visibility": "off" }]
		},{
			"featureType": "transit.station",
			"elementType": "labels",
			"stylers": [{ "visibility": "off" }]
		}],
        styledMapType = new google.maps.StyledMapType(styleOptions, {name: "BikeWalkRoll Styled Map"});
        
        // Set the style
		this.mapObj.mapTypes.set('bwr_style', styledMapType);
		this.mapObj.setMapTypeId('bwr_style');
    }

    /**
     * Turn on the bike layer.
     */
    enableBikeLayer() {
        const bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(this.mapObj);
    }

    /**
     * Center the map.
     */
    setCenterLatLng() {
        // default to winnipeg
        let lat = this.params.lat ?? 49.8951;
        let lng = this.params.lng ?? -97.1384;

        this.centerLatLng = new google.maps.LatLng(lat, lng);
        this.mapObj.setCenter(this.centerLatLng);
    }

    /**
     * update ne/sw in format usable by BWR API
     */
    setFormattedNeSw() {
        this.neFormatted = this.mapObj.getBounds().getNorthEast().lat() + '+' + this.mapObj.getBounds().getNorthEast().lng();
        this.swFormatted = this.mapObj.getBounds().getSouthWest().lat() + '+' + this.mapObj.getBounds().getSouthWest().lng();
    }

    /**
     * Add listeners
     */
    addListeners() {
        this.idleListener();
        this.boundsChangedListener();
        this.zoomChangedListener();
    }

    /**
     * Update formatted NE/SW when bounds change.
     * Execute callback.
     */
    boundsChangedListener() {
        google.maps.event.addListener(this.mapObj, 'bounds_changed', () => {
            this.setFormattedNeSw();

            this.boundsChangedCallback === null || this.boundsChangedCallback();
        });
    }

    /**
     * Execute idle listener callback
     */
    idleListener() {
        google.maps.event.addListener(this.mapObj, 'idle', () => {
            this.clearMarkers();

            this.idleCallback === null || this.idleCallback()
        });
    }

    zoomChangedListener() {
        google.maps.event.addListener(this.mapObj, 'zoom_changed', () => {
            this.clearMarkers();
        });
    }

    /**
     * Differen zoom levels use different marker Icons;
     */
    shouldUseSmallMarkerIcons() {
        return this.mapObj.getZoom() <= this.zoomIconSizeTransition;
    }

    /**
     * Add markers to the map.
     * 
     * @param {schoolMapMarker} markers 
     */
    addMarkers(markers) {
        this.markers = markers.map((m) => new schoolMapMarker(this,m));
    }

    /**
     * Clear all markers.
     */
    clearMarkers() {
        this.markers === null || this.markers.forEach((m) => m.setMap(null));
    }
}
