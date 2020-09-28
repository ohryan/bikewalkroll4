import schoolMapMarkerInfo from '@/utils/schoolMapMarkerInfo';

export default class schoolMapMarker {
    constructor(schoolMap, markerData) {
        this.schoolMap = schoolMap;
        this.markerData = markerData;
        
        let marker = this.drawMaker();
        let markerInfo = new schoolMapMarkerInfo(this.markerData);

        marker.addListener('click', () => {
            markerInfo.open(schoolMap, marker);
        })        
    }

    // get icon options
    // @todo replace this with SVG
    getIconOptions() {
        let url = './img/markers-sprite.png';
        let origin = new google.maps.Point(0, (this.markerData.score * 32));
        let size = new google.maps.Size(32,32);
        let scaledSize = new google.maps.Size(32,3232);

        // if zoomed out, use the smaller marker. 
        if (this.schoolMap.shouldUseSmallMarkerIcons()) {
			url = './img/markers-sprite-small.png';
			origin = new google.maps.Point(0, (Math.floor(this.markerData.score / 10) * 16));
			size = new google.maps.Size(16,16);
            scaledSize = new google.maps.Size(16,160);
        }

        return {
            url: url,
            origin: origin,
            size: size,
            scaledSize: scaledSize,
            optimized: true,
        };
    }

    drawMaker() {
		return new google.maps.Marker({
			position: new google.maps.LatLng(this.markerData.lat, this.markerData.lng),
			map: this.schoolMap.mapObj,
			labelContent: this.markerData.score,
			labelAnchor: new google.maps.Point(12, 28),
            icon: this.getIconOptions(),
            title: this.markerData.name,
		});        
    }

}
