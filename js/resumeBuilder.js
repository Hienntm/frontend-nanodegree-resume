var bio = {
    "name": "hien Ntm",
    "role": "Web Developer",
    "contacts": {
        "mobile": "84-918-097-143",
        "email": "hienntm134@gmail.com",
		"github": "hienntm",
        "twitter": "@hienntm",
        "location": "Bui Xuong Trach street, Thanh Xuan district, Hanoi, Vietnam"
    },
	"welcomeMessage": "Welcome ! Welcome ! Welcome !",
    "skills": [
        "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
    ],
	"biopic": "images/fry.jpg",
	"display": function() {
		var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);

		var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

		var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

		var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);

		var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);

		var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

		var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

		var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);

		var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		/*Header*/
		$("#header").prepend(formattedHTMLheaderRole);

		$("#header").prepend(formattedHTMLheaderName);

		$("#header").append(formattedHTMLbioPic);

		$("#header").append(formattedHTMLwelcomeMsg);

		/*Top Contacts & Footer Contacts*/
		$("#topContacts, #footerContacts").append(formattedHTMLmobile);

		$("#topContacts, #footerContacts").append(formattedHTMLemail);

		$("#topContacts, #footerContacts").append(formattedHTMLgithub);

		$("#topContacts, #footerContacts").append(formattedHTMLtwitter);

		$("#topContacts, #footerContacts").append(formattedHTMLlocation);


		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (i = 0; i < bio.skills.length; i++) {
				var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedHTMLskills);
			}
		}
	}
};

var education = {
    "schools": [{
        "name": "Hanoi FTU",
        "location": "Chua Lang street, Ba Dinh district, Hanoi, Vietnam",
		"degree": "Bachelor",
        "majors": ["Cat family"],
		"dates": "2006-2010",
		"url": "https://www.ftu.edu.vn"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Development",
        "school": "Udacity",
        "dates": "8/2015 - Present",
        "url": "https://udacity.com"
    }, {
        "title": "Full Stack Web Development",
        "school": "Udacity",
        "dates": "1/2016 - Present",
        "url": "https://udacity.com"
    }],
	"display": function() {
		if (education.schools.length > 0) {
			education.schools.forEach(function(school) {
				$("#education").append(HTMLschoolStart);

				var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);

				var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

				var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);

				var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.location);

				$(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree);

				$(".education-entry:last").append(formattedHTMLschoolDates);

				$(".education-entry:last").append(formattedHTMLschoolLocation);

				for (i=0; i<school.majors.length ;i++) {
					var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.majors[i]);
					$(".education-entry:last").append(formattedHTMLschoolMajor);
				}
			});
		}

		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			education.onlineCourses.forEach(function(onlineCourse) {
				$("#education").append(HTMLschoolStart);

				var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);

				var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);

				var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);

				var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);

				$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);

				$(".education-entry:last").append(formattedHTMLonlineDates);

				$(".education-entry:last").append(formattedHTMLonlineURL);

			});
		}
	}
};

var work = {
    "jobs": [{
		"employer": "Meow Meow Co.",
        "title": "Veterinarian",
        "location": "Hoang Quoc Viet street, Cau Giay district, Hanoi, Vietnam",
        "dates": "10/2015 - Present",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
		"employer": "Woof Woof Co.",
        "title": "Veterinarian",
        "location": "Duy Tan street, Cau Giay district, Hanoi, Vietnam",
        "dates": "2/2014 - 7/2015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }],
	"display": function() {
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
	}
};

var projects = {
    "projects": [{
        "title": "APPIFY",
        "dates": "??/??/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "images": ["images/appify.jpg"]
    }, {
        "title": "SUNFLOWER",
        "dates": "??/??/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "images": ["images/sunflower.jpg"]
    }, {
        "title": "BOKEH",
        "dates": "??/??/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "images": ["images/bokeh.jpg"]
    }],
	"display": function() {
		if (projects.projects.length > 0) {
			projects.projects.forEach(function(project) {
				$("#projects").append(HTMLprojectStart);

				var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title);

				var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);

				var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
				
				$(".project-entry:last").append(formattedHTMLprojectTitle);
				$(".project-entry:last").append(formattedHTMLprojectDates);
				$(".project-entry:last").append(formattedHTMLprojectDescription);
				
				for(i=0; i<project.images.length; i++){
					var formattedHTMLprojectImage = 		HTMLprojectImage.replace("%data%", project.images[i]);
					$(".project-entry:last").append(formattedHTMLprojectImage);
				}		
			});
		}
	}
};



bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);