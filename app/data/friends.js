// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var matchArray = [
    {
        "name":"Richard",
        "photo":"https://vignette.wikia.nocookie.net/rickandmorty/images/8/8f/Rickk22.png/revision/latest?cb=20170911060616",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Trudy Beekman",
        "photo":"https://pbs.twimg.com/media/DSNwi-rVoAAyZSl.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Ghus the herder",
        "photo":"https://pm1.narvii.com/5738/95c90dcd9dc6253063ec093294da19a9c912033f_hq.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      }
];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;