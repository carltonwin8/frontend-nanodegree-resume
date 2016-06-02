/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
  name: 'Wile E. Coyote',
  role: 'Road runner chaser',
  contacts: {
    mobile: '234-555-1212',
    email: 'wile.e.coyote@gmail.com',
    github: 'http://github.com/wileecoyote',
    twitter: '@wileecoyote',
    location: 'Sedona, AZ',
    blog: 'http://wordpress.og/wile-e-coyote'
  },
  welcomeMessage: "If he ever catches you, you're through",
  skills: ['carpenter', 'explosive expert', 'catapult designer'],
  biopic: 'https://upload.wikimedia.org/wikipedia/en/5/56/Wile_E_Coyote.png',
  display: function () {
    $('#header').prepend(HTMLheaderRole.replace('%data%',bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%',bio.name));
    $('#topContacts').append(HTMLlocation.replace('%data%',bio.contacts.location));
    $('#topContacts').append(HTMLmobile.replace('%data%',bio.contacts.mobile));
    $('#topContacts').append(HTMLemail.replace('%data%',bio.contacts.email));
    $('#topContacts').append(HTMLtwitter.replace('%data%',bio.contacts.twitter));
    $('#topContacts').append(HTMLgithub.replace('%data%',bio.contacts.github));
    $('#topContacts').append(HTMLblog.replace('%data%',bio.contacts.blog));
    $('#header').append(HTMLbioPic.replace('%data%',bio.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage));
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
      $('#skills-h3').append(HTMLskills.replace('%data%',skill));
    });
  }
};
bio.display();

var education = {
  schools: [
    {
      name: 'University of New Mexico',
      location: 'Albuquerque, NM 87131',
      degree: 'PhD Of Science',
      majors: ['Physics', 'Propulsion'],
      dates: '1948-1942',
      url: 'https://www.unm.edu/'
    },
    {
      name: 'University of Arizona',
      location: 'Tucson, AZ 85721',
      degree: 'Bachelors Of Science',
      majors: ['Anatomy', 'Birds'],
      dates: '1938-1942',
      url: 'http://www.arizona.edu/'
    }
  ],
  onlineCourses: [
    {
      title: 'Anvil Building',
      school: 'ACME',
      dates: '2005-2006',
      url: 'http://acme.com'
    },
    {
      title: 'Crash Course',
      school: 'Hard Knocks',
      dates: '2007-2008',
      url: 'http://hardknocks.com'
    }
  ],
  display: function () {
    var eLast;
    education.schools.forEach(function (school) {
      $('#education').append(HTMLschoolStart);
      eLast = $('.education-entry:last');
      eLast.append(HTMLschoolName.replace('%data%',school.name));
      eLast.append(HTMLschoolDegree.replace('%data%',school.degree));
      eLast.append(HTMLschoolDates.replace('%data%',school.dates));
      eLast.append(HTMLschoolLocation.replace('%data%',school.location));
      school.majors.forEach(function (major) {
        eLast.append(HTMLschoolMajor.replace('%data%',major));
      });
    });
    eLast = $('.education-entry:last');
    eLast.append(HTMLonlineClasses);
    education.onlineCourses.forEach(function (onlineCourse) {
      eLast.append(HTMLonlineTitle.replace('%data%',onlineCourse.title));
      eLast.append(HTMLonlineSchool.replace('%data%',onlineCourse.school));
      eLast.append(HTMLonlineDates.replace('%data%',onlineCourse.dates));
      eLast.append(HTMLonlineURL.replace('%data%',onlineCourse.url));
    });
  }
};
education.display();

var work = {
  jobs: [
    {
      employer: 'ACME',
      title: 'Quality Control',
      location: 'Las Vegas, NV 89113',
      dates: 'in progress',
      description: 'Inspect products for correct operation.'
    },
    {
      employer: 'Zoo',
      title: 'Bird Inspector',
      location: 'Phoenix, AZ',
      dates: '1950-1970',
      description: 'Feed and take care of birds.'
    }
  ],
  display: function () {
    work.jobs.forEach(function (work) {
      $('#workExperience').append(HTMLworkStart);
      var wLast = $('.work-entry:last');
      wLast.append(HTMLworkEmployer.replace('%data%',work.employer));
      wLast.append(HTMLworkTitle.replace('%data%',work.title));
      wLast.append(HTMLworkDates.replace('%data%',work.dates));
      wLast.append(HTMLworkLocation.replace('%data%',work.location));
      wLast.append(HTMLworkDescription.replace('%data%',work.description));
    });
  }
};
work.display();

var projects = {
  projects: [
    {
      title: 'Manhattan',
      dates: '1959-1960',
      description: 'Produce a nuclear weapon',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/6/6c/Manhattan_Project_emblem.png',
        'https://upload.wikimedia.org/wikipedia/commons/8/8d/Trinity_shot_color.jpg'
      ]
    },
    {
      title: 'Alan Parsons',
      dates: '1961-1970',
      description: 'Make music',
      images: [
        'https://upload.wikimedia.org/wikipedia/en/8/8d/Alan_parsons_project.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/Alan_Parsons_live.jpg'
      ]
    }
  ],
  display: function () {
    projects.projects.forEach(function (project) {
      $('#projects').append(HTMLprojectStart);
      var pLast = $('.project-entry:last');
      pLast.append(HTMLprojectTitle.replace('%data%',project.title));
      pLast.append(HTMLprojectDates.replace('%data%',project.dates));
      pLast.append(HTMLprojectDescription.replace('%data%',project.description));
      project.images.forEach(function (image) {
        pLast.append(HTMLprojectImage.replace('%data%',image));
        console.log(image);
      });
    });
  }
};
projects.display();

$('#mapDiv').append(googleMap);
