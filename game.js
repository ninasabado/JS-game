var sceneData = [
    //1: INITIAL SCENE
    { question: "Midterms season is the worst. You know you should not have taken that Math V9630 class, but you just loved math so much. You sympathized when Cady Heron said that it's the same in every language. The two of you are just math nerds like that I guess. It's the day of your midterm (7:10 pm, at 202 Altschul with Professor Pavan, who is harsh but fair and hates when his students talk too much). It is 3:00 pm and you have four hours to go. You are currently in...",
        image: "http://img1.wikia.nocookie.net/__cb20130409141027/socio/images/0/05/The_limit_does_not_exist.gif",
        subtract: 0,
        pts: 0,
        choices: [
        { answer: "Butler", desc: "Your friendly neighborhood library!", next: 2},
        { answer: "600", desc: "Home sweet home!", next: 3}]
    }, //2: BUTLER
    { question: "You spent way too much time celebrating at Bacchanal and have been trying to cram for your exam in Butler since 9:00am. It's about time you take a little bit of a nap, so you pack your stuff and head downstairs. But at the lobby... Michelle and Malia Obama are touring Butler and there is a mob of students completely blocking the entrance to Butler trying to take selfies. No way you can shove through. What do you do?",
        image: "http://img1.nymag.com/imgs/daily/intelligencer/2013/01/22/22-inaugural-parade-6.w529.h352.2x.jpg",
        subtract: 30,
        pts: 30,
        choices: [
        { answer: "Join 'em!", desc: "Join the mob in a desperate attempt to get a selfie of your own with the Obamas, of course! Screw resting!", next: 11},
        { answer: "Escape!", desc: "You run up to the the 3rd floor of Butler and jump out of the window in Milstein.", next: 11},
        ]
    }, //3: DORMS
    { question: "Studying in the library is for losers. You prefer the warm comfort of your own chair and desk. But wait... it's getting a little too warm, isn't it? And do you smell smoke? Suddenly, you hear an ear-piercing beep from above you. Fuck, it's a fire alarm. I don't have time for this, you think in frustration, but at least you're not in the shower right now. What do you do?", 
        image: "http://img2.wikia.nocookie.net/__cb20140201232935/cardfight/images/f/fc/Animated-building-on-fire-burning-down.gif",
        subtract: 30,
        pts: 20,
        choices: [
        { answer: "Save all things!", desc: "You grab all of your stuff first- no way you're going to be stuck the day of midterms without your notes!", next: 4 },
        { answer: "Save yourself!", desc: "Leave immediately. You care more about risking your neck than your grades, and in the worst case scenario, your Class Dean can send a pitiful email to your professor.", next: 5},
        ]
    }, //4: SAVE ALL OF YOUR SHIT FROM THE FIRE!!
    { question: "Lucky you! That fire pretty much exploded Ollie's, but at least you have your notes and laptop to keep you company. It took away some time for you to run away from the burning dormitories, however, and all you really want to do is find someplace to study. What do you do?",
        subtract: 15,
        pts: -10,
        choices: [
        { answer: "Go to Butler!", desc: "The day of midterms without notes? The white old men carved into Butler will save me!", next: 2 },
        { answer: "Call all your friends to study buddy up", desc: "Two is better than one, and three's a party and all that jazz right? Desperate times call for desperate measures, and Britney and Ryan may be just who you need.", next: 6},
        ]
    }, //5: SAVE YOURSELF!!!
    { question: "You had thought that it was probably a Barnard student who burnt some popcorn in the dorms, and you'll be let back in ASAP, but it turns out the fire is stronger than people had anticipated. Something about a boiler exploding? Your dorm is a probably a mess and even if nothing's burnt down, it'll take forever to get the soot away from your laptop. Either way, the commotion has made the last few hours you spent cramming your notes practically negligible. And you don't have your notes.",
        subtract: 10,
        pts: -30,
        choices: [
        { answer: "Call all your friends to study buddy up", desc: "Two is better than one, and three's a party and all that jazz right? Desperate times call for desperate measures, and Britney and Ryan may be just who you need.", next: 6 },
        { answer: "Roll over and give up", desc: "Life sucks. You'll never finish your midterm.", next: 11},
        ]
    }, //6: BRITNEY AND JUSTIN
    { question: "It seems like ever since 3:00 hit, all these crazy things have been happening to you... and it's only been XCURRENTX minutes! Still, with XCURRENTX minutes left before your exam, you think it's best to call up a couple of friends to help you cram. Good thing, too, Brit totally pointed out a misunderstanding you had with Galois theory. And Ryan's such a sweetie and got you your favorite drink! Suddenly, Ryan checks his watch and realizes that he needs to stop by Lerner to pick up important mail, but Brit's willing to stay around and study for a little longer. What do you do?", 
        image: "https://s-media-cache-ak0.pinimg.com/originals/85/83/0f/85830f1843b356b3db8bc28bd34122ea.jpg",
        subtract: 20,
        pts: 20,
        choices: [
        { answer: "6 part 1", next: 11 },
        { answer: "6 part 2", next: 11},
        { answer: "6 part 3", next: 11},
        { answer: "6 part 4", next: 11}
        ]
    }, //6
    { question: "seventh question. What do you do", choices: [
        { answer: "7 part 1", next: 11 },
        { answer: "7 part 2", next: 11},
        { answer: "7 part 3", next: 11},
        { answer: "7 part 4", next: 11}
        ]
    }, //7
    { question: "eighth question. What do you do", choices: [
        { answer: "8 part 1", next: 11 },
        { answer: "8 part 2", next: 11},
        { answer: "8 part 3", next: 11},
        { answer: "8 part 4", next: 11}
        ]
    }, //8
    { question: "ninth question. What do you do", choices: [
        { answer: "9 part 1", next: 11},
        { answer: "9 part 2", next: 11},
        { answer: "9 part 3", next: 11},
        { answer: "9 part 4", next: 11}
        ]
    }, //9
    { question: "you win", choices: [
        { answer: "try again", next: 1 }
        ]
    }, //11: DEAD
    { question: "DEAD END. SUCKS TO SUCK DUDE.",
        image: "http://media1.giphy.com/media/h5NLPVn3rg0Rq/giphy.gif",
        subtract: 5000,
        pts: -5000,
    } 
];
 
var ScenesModel = function(scenes) {
    var self = this;
    self.scenes = ko.observableArray(scenes);

    self.activequestion = ko.observable(scenes[0].question);
    self.activeimage = ko.observable(scenes[0].image);
    self.activechoices = ko.observableArray(scenes[0].choices);
    self.desc = ko.observable(scenes[0].choices.desc);

    self.timeRemaining = ko.observable(240);
    self.points = ko.observable(100);

    self.nextScene = function(choice) {
    	self.activequestion(self.parsed(scenes[choice.next - 1].question));
        self.activeimage(scenes[choice.next - 1].image);
    	self.activechoices(scenes[choice.next - 1].choices);

        // Subtracts however much time it takes
        var x = scenes[choice.next-1].subtract;
        self.changeTime(x);

        // Applies the points
        var y = scenes[choice.next-1].pts;
        self.changePoints(y);
    }

    self.parsed = function(string){
        var nw;
        while(string.indexOf('XCURRENTX') != -1){
            nw = string.replace('XCURRENTX', self.timeRemaining().toString());
        }
        if(!nw){
            nw = string;
        }
        return string;
    }

    /* FUNCTION TO CHANGE TIME & KEEP TRACK OF THINGS */
    self.changeTime = function(minutes){
        self.timeRemaining(self.timeRemaining()-minutes);
        if(self.timeRemaining() < 30)
            self.nextScene(99);
    } 

    /* FUNCTION TO CHANGE POINTS */
    self.changePoints = function(pts){
        if((self.points()+pts) < 110)
            self.points(self.points()+pts);
        else
            self.points(110);
    }
};

JSON.stringify(sceneData).replace("'", "\'");
ko.applyBindings(new ScenesModel(sceneData));

/*
	score
	pictures
			
*/
