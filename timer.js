Router.route('/timer');

if (Meteor.isClient) {

    var second2 = 0;
    var second1 = 0;
    var minute2 = 0;
    var minute1 = 0;
    var hour2 = 0;
    var hour1 = 0;
    var inc = 0;
    var div = hour1 + "" + hour2 + ":" + minute1 + minute2 + ":" + second1 + second2;
    var speed = 0;
    var tot = 0;
    var strSpeed = speed + "" + speed;

    var totalSec = 0;
    var totalMin = totalSec/60;

    // Global var (from main.js)


    Template.clock.helpers({
        timer: function () {
            Chronos.liveUpdate();
            second2 += inc;
            tot += inc;
            if (second2 > 9) {
                second2 = 0;
                second1 += 1;
            }
            if (second1 > 5) {
                second1 = 0;
                minute2 += 1;
            }
            if (minute2 > 9) {
                minute2 = 0;
                minute1 += 1;
            }
            if (minute1 > 5) {
                minute1 = 0;
                hour2 += 1;
            }
            if (hour2 > 9) {
                hour2 = 0;
                hour1 += 1;
            }
            div = hour1 + "" + hour2 + ":" + minute1 + minute2 + ":" + second1 + second2;
            totalSec++;
            return div;
        },
        speed: function () {
            Chronos.liveUpdate();
            var dis = document.getElementById("curDist").innerHTML;
            speed = ((dis * 3600) / tot).toFixed(2);
            strSpeed = speed + "" ;
            return strSpeed;
        }
    });

    Template.timer.events({
        'click #start': function () {
            {
                inc = 1;
                div = hour1 + "" + hour2 + ":" + minute1 + minute2 + ":" + second1 + second2;
                return div;
            }
        },

        'click #stop': function () {
            {
                inc = 0;
                div = hour1 + "" + hour2 + ":" + minute1 + minute2 + ":" + second1 + second2;
                return div;
            }
        },

        'click #reset': function () {
            {
                second2 = 0;
                second1 = 0;
                tot = 0;
                div = hour1 + "" + hour2 + ":" + minute1 + minute2 + ":" + second1 + second2;
                return div;
            }
        }
    });
}




