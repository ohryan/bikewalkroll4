export default class schoolMapMarkerInfo {
    constructor(school) {
        this.school = school;
        console.log(this.school);
        return this.defineInfoWindow();
    }

    defineInfoWindow() {
        return new google.maps.InfoWindow({
            content: `<div class="text-center flex flex-col" style="min-width: 240px; min-height: 120px; padding: 20px 0  " >
                        <h4 class="text-green">${this.school.name}</h4>
                        <p class="flex-1">${this.school.address}</p>
                        <a href="/surveyCentres/view/${this.school.id}" class="btn-sm btn-green">Go to report</a>
                    </div>`
          });        
    }
}
