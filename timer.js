Router.route('/timer');

if (Meteor.isClient) {

    var $time;
    var clocktimer;


    var second2 = 0;
    var second1 = 0;
    var minute2 = 0;
    var minute1 = 0;
    var hour2 = 0;
    var hour1 = 0;
    var inc = 0;
    var div = hour1 + "" + hour2 + ":" + minute1 + minute2 + ":" + second1 + second2;


    Template.foo.helpers({
        timer: function () {
            Chronos.liveUpdate();
            second2 += inc;
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
            return div;
        }
    });

    Template.timer.events({
        'click #start': function () {
            timer : {
                inc = 1;
                div = hour1 + "" + hour2 + ":" + minute1 + minute2 + ":" + second1 + second2;
                return div;
            }
        },

        'click #stop': function () {
            timer : {
                inc = 0;
                div = hour1 + "" + hour2 + ":" + minute1 + minute2 + ":" + second1 + second2;
                return div;
            }
        },

        'click #reset': function () {
            timer : {
                second2 = 0;
                second1 = 0;
                div = hour1 + "" + hour2 + ":" + minute1 + minute2 + ":" + second1 + second2;
                return div;
            }
        }
    });
}




