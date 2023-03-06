var monday = {
      morning: {
        namaz: "Early morning",
        breakFast: "After namaz",
        eat: function () {
          console.log(this.breakFast);
        },
      },

      evening: {
        eat: "anything",
      },
    };
    var tuesday = {
      exercise: "Anything",
    };