export default function() {
  this.namespace = '/api';


  /**
   * Self-defined data for photo galleries
   * @type {[*]}
   */
  let photos = [
    {
      type: 'photos',
      id: 'atlantis-hotel',
      attributes: {
        title: "Atlantis Paradise",
        photographer: "Aaron Lin",
        location: "Bahamas",
        award: "Bronze",
        rating: 2,
        image: "/assets/images/atlantis.jpg",
        description: "Atlantis Paradise Island is an ocean-themed resort on Paradise Island in the Bahamas."
      }
    },
    {
      type: 'photos',
      id: 'beartooth-highway',
      attributes: {
        title: "Beartooth Highway",
        photographer: "Anna Chen",
        location: "Yellow Stone",
        award: "Bronze",
        rating: 3,
        image: "/assets/images/mountain.jpg",
        description: "The Beartooth Highway is an All-American Road on a section of U.S. Route 212 in Montana between Red Lodge and the Wyoming state line at Beartooth Pass, located 10,947 feet above sea level near Yellowstone National Park. "
      }
    },
    {
      type: 'photos',
      id: 'paint-lovely-anna',
      attributes: {
        title: "Lovely Lady",
        photographer: "Aaron Lin",
        location: "Old San Juan",
        award: "Gold",
        rating: 5,
        image: "/assets/images/paint-ana.jpg",
        description: "Old San Juan is the oldest settlement within Puerto Rico and the historic colonial section of the city of San Juan."
      }
    },
    {
      type: 'photos',
      id: 'sea-shore',
      attributes: {
        title: "Seashore Puerto Rico",
        photographer: "Anna Chen",
        location: "Puerto Rico",
        award: "Silver",
        rating: 4,
        image: "/assets/images/PR-OSJ.jpg",
        description: "Puerto Rico is a Caribbean island and unincorporated U.S. territory with a landscape of mountains, waterfalls and the El Yunque tropical rainforest."
      }
    },
    {
      type: 'photos',
      id: 'storm-mountain',
      attributes: {
        title: "Storm On The Way",
        photographer: "Aaron Lin",
        location: "Lake Tahoe",
        award: "Gold",
        rating: 5,
        image: "/assets/images/storm.jpg",
        description: "The most beautiful places in the world are also the most dangerous."
      }
    },
    {
      type: 'photos',
      id: 'grand-prismatic-springs',
      attributes: {
        title: "Grand Prismatic",
        photographer: "Anna Chen",
        location: "Yellow Stone",
        award: "Gold",
        rating: 5,
        image: "/assets/images/Sun.jpg",
        description: "The Grand Prismatic Spring in Yellowstone National Park is the largest hot spring in the United States, and the third largest in the world, after Frying Pan Lake in New Zealand and Boiling Lake in Dominica."
      }
    },
    {
      type: 'photos',
      id: 'catch-water-fall',
      attributes: {
        title: "Waterfall",
        photographer: "Anna Chen",
        location: "Yoshimate",
        award: "Silver",
        rating: 4,
        image: "/assets/images/Water Fall.jpg",
        description: "The iconic moment waterfall."
      }
    }
  ];

  /***
   * Filter by City
   */
  this.get('/photos', function(db, request) {
    if (request.queryParams.location !== undefined) {
      let filteredResults = photos.filter(function (i) {
        return i.attributes.location.toLowerCase().indexOf(request.queryParams.location.toLowerCase()) !== -1;
      });
      return { data: filteredResults };
    } else if (request.queryParams.photographer !== undefined) {
      let filteredResults = photos.filter(function (i) {
        return i.attributes.photographer.toLowerCase().indexOf(request.queryParams.photographer.toLowerCase()) !== -1;
      });
      return { data: filteredResults };
    }else if (request.queryParams.award !== undefined) {
      let filteredResults = photos.filter(function (i) {
        return i.attributes.award.toLowerCase().indexOf(request.queryParams.award.toLowerCase()) !== -1;
      });
      return { data: filteredResults };
    }
    else if (request.queryParams.all !== undefined) {
      var filterText = request.queryParams.all.toLowerCase();

      let filteredResults = photos.filter(function (i) {
        return i.attributes.location.toLowerCase().indexOf(filterText) !== -1 ||
          i.attributes.photographer.toLowerCase().indexOf(filterText) !== -1 ||
          i.attributes.award.toLowerCase().indexOf(filterText) !== -1;
      });

      return { data: filteredResults };
    }
    else {
      return { data: photos };
    }
  });

  // Find and return the provided photo from our photo list above
  this.get('/photos/:id', function (db, request) {
    return { data: photos.find((photo) => request.params.id === photo.id) };
  });

  // this.resource('photos');
  /***
   * Pre-defined by mirage
   */
  this.resource('tasks');

}
