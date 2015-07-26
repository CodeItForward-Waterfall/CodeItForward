Router.route('/timer');

if (Meteor.isClient) {

var $time;
var clocktimer;

    var time = 0;
    var inc = 0;

    Template.foo.helpers({
        timer : function() {
            Chronos.liveUpdate();
            time +=  inc;
            return time;
        }
    });

    Template.timer.events({
        'click #start': function(){
            timer : {
                inc = 1;
                return time;
            }
        },

        'click #stop': function(){
            timer : {
                inc = 0;
                return time;
            }
        },

        'click #reset': function(){
            timer : {
                time = 0;
                return time;
            }
        }
    });
}



