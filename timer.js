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
    var dist = 0;

    var totalSec = 0;
    var boolz = false;
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
        distance: function () {
            Chronos.liveUpdate();
            if(boolz){
                totalDist = 0;
                boolz = false;
            }
          return totalDist;
        },
        speed: function () {
            Chronos.liveUpdate();
            speed = ((totalDist * 3600) / tot).toFixed(2);
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
                minute2 = 0;
                minute1 = 0;
                hour2 = 0;
                hour1 = 0;
                inc = 0;
                div = hour1 + "" + hour2 + ":" + minute1 + minute2 + ":" + second1 + second2;
                speed = 0;
                tot = 0;
                strSpeed = speed + "";
                dist = 0;

                totalSec = 0;
                boolz = true;


                emptyPath();

                div = hour1 + "" + hour2 + ":" + minute1 + minute2 + ":" + second1 + second2;
                return div;
            }
        }
    });


}


if (Meteor.isClient) {


    var now = new Date();
    var future = new Date("September 20, 2015, 9:00:00");
    var remaining = future - now;
    var timer;

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var days = Math.floor(remaining / _day);
    var hours = Math.floor((remaining % _day) / _hour);
    var minutes = Math.floor((remaining % _hour) / _minute);
    var seconds = Math.floor((remaining % _minute) / _second);
    var incr = 0

    Template.countDown.helpers({
        countdown: function () {
            Chronos.liveUpdate();

            document.getElementById('Countdown').innerHTML = 'Time Remaining: ' + days + 'days ';
            document.getElementById('Countdown').innerHTML += hours + 'hrs ';
            document.getElementById('Countdown').innerHTML += minutes + 'mins ';
            document.getElementById('Countdown').innerHTML += seconds + 'secs';

            seconds -= incr;

            if (seconds < 0) {
                seconds = 59;
                minutes -= 1;
            } if (minutes < 0) {
                minutes = 59;
                hours -= 1;
            } if (hours < 0) {
                hours = 23;
                days -= 1;
            } if (days < 0 && hours == 23 && minutes == 59 && seconds == 59){
                days= 0;
                hours = 0;
                minutes =0;
                seconds =0;
                document.getElementById('Countdown').innerHTML = "Get on Bike";
            }

    }
})

    Template.countDown.events({
        countdown : onload = function() {
            incr = 1;
            return days + ' days '+ hours + ' hrs '+ minutes + ' mins ' +seconds + ' secs';
        }
    })
}