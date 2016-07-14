var bio = {
    "name": "hien Ntm",
    "role": "Web Developer",
    "contacts": {
        "mobile": "84-918-097-143",
        "email": "hienntm134@gmail.com",
        "twitter": "@hienntm",
        "github": "hienntm",
        "blog": "hienntm",
        "location": "Bui Xuong Trach street, Thanh Xuan district, Hanoi, Vietnam"
    },
    "bioPic": "images/fry.jpg",
    "welcome message": "Welcome ! Welcome ! Welcome !",
    "skills": [
        "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
    ]
};

var education = {
    "schools": [{
        "name": "Hanoi FTU",
        "degree": "Bachelor",
        "dates": "2006-2010",
        "location": "Chua Lang street, Ba Dinh district, Hanoi, Vietnam",
        "major": "Cat family"
    }],
    "onlineClasses": [{
        "title": "Front-End Web Development",
        "school": "Udacity",
        "dates": "8/2015 ~ Present",
        "url": "https://udacity.com"
    }, {
        "title": "Full Stack Web Development",
        "school": "Udacity",
        "dates": "1/2016 ~ Present",
        "url": "https://udacity.com"
    }]
};

var work = {
    "jobs": [{
        "title": "Veterinarian",
        "employer": "Meow Meow Co.",
        "location": "Hoang Quoc Viet street, Cau Giay district, Hanoi, Vietnam",
        "dates": "10/2015 ~ present",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "title": "Veterinarian",
        "employer": "Woof Woof Co.",
        "location": "Duy Tan street, Cau Giay district, Hanoi, Vietnam",
        "dates": "2/2014 ~ 7/2015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }]
};

var projects = {
    "projects": [{
        "title": "APPIFY",
        "dates": "??/??/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "images": "images/appify.jpg"
    }, {
        "title": "SUNFLOWER",
        "dates": "??/??/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "images": "images/sunflower.jpg"
    }, {
        "title": "BOKEH",
        "dates": "??/??/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "images": "images/bokeh.jpg"
    }]
};


bio.display = function() {
    var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);

    var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);

    var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);

    var formattedHTMLblog = HTMLblog.replace("%data%", bio.contacts.blog);

    var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);

    var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio["welcome message"]);

    /*Header*/
    $("#header").prepend(formattedHTMLheaderRole);

    $("#header").prepend(formattedHTMLheaderName);

    $("#header").append(formattedHTMLbioPic);

    $("#header").append(formattedHTMLwelcomeMsg);

    /*Top Contacts*/
    $("#topContacts").append(formattedHTMLmobile);

    $("#topContacts").append(formattedHTMLemail);

    $("#topContacts").append(formattedHTMLtwitter);

    $("#topContacts").append(formattedHTMLgithub);

    $("#topContacts").append(formattedHTMLblog);

    $("#topContacts").append(formattedHTMLlocation);

    /*Footer Contacts*/
    $("#footerContacts").append(formattedHTMLmobile);

    $("#footerContacts").append(formattedHTMLemail);

    $("#footerContacts").append(formattedHTMLtwitter);

    $("#footerContacts").append(formattedHTMLgithub);

    $("#footerContacts").append(formattedHTMLblog);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedHTMLskills);
        }
    }
};

work.display = function() {
    if (work.jobs.length > 0) {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);

            var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);

            var formattedHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);

            var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);

            var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);


            $(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle);

            $(".work-entry:last").append(formattedHTMLworkDates);

            $(".work-entry:last").append(formattedHTMLworkLocation);

            $(".work-entry:last").append(formattedHTMLworkDescription);
        });
    }
};

projects.display = function() {
    if (projects.projects.length > 0) {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title);

            var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);

            var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description);

            var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", project.images);


            $(".project-entry:last").append(formattedHTMLprojectTitle);
            $(".project-entry:last").append(formattedHTMLprojectDates);
            $(".project-entry:last").append(formattedHTMLprojectDescription);
            $(".project-entry:last").append(formattedHTMLprojectImage);
        });
    }
};

education.display = function() {
    if (education.schools.length > 0) {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);

            var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

            var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);

            var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.location);

            var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.major);

            $(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree);

            $(".education-entry:last").append(formattedHTMLschoolDates);

            $(".education-entry:last").append(formattedHTMLschoolLocation);

            $(".education-entry:last").append(formattedHTMLschoolMajor);
        });
    }

    if (education.onlineClasses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineClasses.forEach(function(onlineClass) {
            $("#education").append(HTMLschoolStart);

            var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", onlineClass.title);

            var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", onlineClass.school);

            var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", onlineClass.dates);

            var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", onlineClass.url);

            $(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);

            $(".education-entry:last").append(formattedHTMLonlineDates);

            $(".education-entry:last").append(formattedHTMLonlineURL);

        });
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);