<template>
  <div class="about static-page">
    <SubHeader title="About Us"></SubHeader>
    <ContentMain
      :dark=true
    >
      <div class="max-w-screen-lg m-auto p-6 bg-white">
        <h1>About the design team and vision behind BikeWalkRoll</h1>
        <p><strong>Our vision</strong> is a world where young people of any age get to experience the joy and freedom of biking, walking or using a skateboard/wheelchair to get to school on one’s own.</p>
        <p><strong>Our mission</strong> is to enlist the effort of school classrooms around the world to help reinvent how cities, towns and countries measure transportation. Period. (We see school transportation in the same way that others might see commuting to work - a useful benchmark for measuring the health of our entire transportation - except that adults tend to have their minds made up and are very hard to survey….. Kids are different. We think that we can collect just as important data, faster, easier and share it when/where/how it counts. We think BikeWalkRoll is more than childsplay, BikeWalkRoll is a new way of counting transportation.)</p>

        <h3>We Value:</h3>
          <ul class="list-disc list-inside">
            <li>Open data</li>
            <li>Real-time results</li>
            <li>Ease of use</li>
            <li>Story telling</li>
            <li>Citizen Science</li>
            <li>Friendly Competition (...with emphasis on repeating surveys and self-improvement, not just on overall BikeWalkRoll scores. Sure, we all want these to go up, but a low score is not a school/kid/parent’s fault. After all, 99% of students would rather get to school the healthy and fun way. It is not enough to encourage people. We face real barriers. Building better cities something we all need to do something about.)</li>
          </ul>
          <h3>The Team:</h3>
          <p><a href="https://twitter.com/swansonanders" target="_blank">Anders Swanson</a> is the project director. He charts the course, makes phone calls, answers emails, tests for bugs, draws stuff occasionally, tweets too much, talks to big crowds of people, cleans the toilets and does a little bit of everything. </p>
          <p><a href="https://twitter.com/ohryan" target="_blank">Ryan Neudorf</a> is the web developer. He is the head wizard responsible for making it work well on your computer.</p>
          <p><a href="https://twitter.com/ty_candy_" target="_blank">Tyler Johnston</a> is an graphic designer. He is responsible for making everything look nice and juicy and fun.</p>
          <p><a href="https://twitter.com/greenactionctr">Green Action Centre</a> is the not-for-profit organization for whom the software is developed. They find the money and write the cheques. More importantly…. their Active and Safe Routes to School program is on the front lines of school transportation every day and all of their hard work inspired and formed the basis for this software. And, of course, they take the lead on making BikeWalkRoll grow at home in Manitoba.</p>
          <p><strong>You</strong> are the ones that really make BikeWalkRoll work. Help it spread. You can do so by telling teachers, politicians, parents, about the program and why it is so very important (and easy!) to do a BikeWalkRoll survey. If you work for an organization, and want to find out more about getting funded to run a campaign near you, don’t hesitate to send us an email. </p>
          <h3>Translation support kindly provided by:</h3>
          <a href="http://arquitecturia.org/" target="_blank"><img src="/img/LOGO AS ARQ NB.png" alt="Arquitectúria" class="m-auto p-6"></a>
          <a href="https://pyoraliitto.fi/" target="_blank"><img src="/img/PyorallitoLogo.png" alt="pyorallito" class="m-auto p-6"></a>
          
          <h4>Acknowledgements:</h4>
          <p>Over the years, the following people have helped make BikeWalkRoll possible: Devon Mitton (web wizard #2), Torrin Swanson (campaign and mobile developer), Christine Houde, Sue Barkman, Randall McQuaker, Jackie Avent, Shoni Madden, Lea Grzenda, Janice Lukes, Tracy Hucul, Masha Giller, Jamie Hilland, Red River College, The University of Manitoba, The City of Winnipeg, Adam Prokopanko, Steve Lawrence, Toronto Catholic School Division, The National Safe Routes To School Partnership, Taylor Lonsdale, The Winnipeg Foundation, The Heart and Stroke Foundation, Jeannette Montufar, Jamie Lacoste, Leigh Anne Parry, Velo-City Vienna, Walk21, Winter Cycling Federation, Torrin Swanson, International Winter Bike to Work Day, Neil Bailey, Green Communities Canada, school division, students and teachers everywhere!</p>
      </div>
    </ContentMain>
  </div>
</template>

<script>
import SubHeader from '@/components/header/SubHeader.vue';
import ContentMain from '@/components/content/Main.vue';

export default {
  name: 'About',
  components: {
    ContentMain,
    SubHeader,
  },
};
</script>
