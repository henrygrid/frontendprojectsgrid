const fakeUser = {
  username: "Juvanna",
  uid: "DabvcWn4jiSoVonf6sjkeIIEU0p2",
  email: "juvannameetmymom@gmail.com",
  role: "admin",
  photoUrl: "https://res.cloudinary.com/hjmorrow23/image/upload/v1541617700/rostered/profiles/default.jpg",
  userId: "ABC123",
  userLeagues: [
    {
      leagueName: "Leaguer",
      leagueId: "BCD234"
    }
  ],
  userTeams: [
    {
      teamName: "Teamer",
      teamId: "CDE345"
    }
  ]
};

const fakeEvents = [
  {
    title: "Flint League Tourney",
    start: new Date('October 26, 2018'),
    end: new Date('October 27, 2018 10:24:00'),
    eventUser: "DabvcWn4jiSoVonf6sjkeIIEU0p2",
  },
  {
    title: "Wombats: Practice",
    start: new Date('October 17, 2018'),
    end: new Date('October 17, 2018 10:24:00'),
    eventUser: "DabvcWn4jiSoVonf6sjkeIIEU0p2",
  },
  {
    title: "Bombs: Team Dinner",
    start: new Date('October 29, 2018'),
    end: new Date('October 29, 2018 10:24:00'),
    eventUser: "OCrRIeH9bATA5Tf4GgCdKrnT5wy2",
  }
];

export {
    fakeUser,
    fakeEvents
};
