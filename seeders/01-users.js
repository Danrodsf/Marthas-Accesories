"use strict";
const bcrypt = require("bcrypt");
const authConfig = require("../config/auth");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          firstName: "Daniel",
          lastName: "Rodriguez",
          age: 36,
          address: "Valencia",
          phone: "123456789",
          email: "dan@dan.com",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstName: "Yard",
          lastName: "Artois",
          age: 30,
          address: "4217 Ronald Regan Lane",
          phone: "856605933",
          email: "yartois0@github.io",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-04-04 07:37:02",
          updatedAt: "2021-01-09 13:03:12",
        },
        {
          id: 3,
          firstName: "Almire",
          lastName: "Pond",
          age: 56,
          address: "4 Raven Alley",
          phone: "645114665",
          email: "apond1@rambler.ru",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-06-17 12:43:23",
          updatedAt: "2020-11-23 15:58:07",
        },
        {
          id: 4,
          firstName: "Asia",
          lastName: "Lurcock",
          age: 23,
          address: "26836 Kropf Hill",
          phone: "669689835",
          email: "alurcock2@ucla.edu",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-09-25 20:54:31",
          updatedAt: "2021-06-27 05:56:54",
        },
        {
          id: 5,
          firstName: "Shirleen",
          lastName: "Tockell",
          age: 54,
          address: "0 Saint Paul Pass",
          phone: "208701873",
          email: "stockell3@123-reg.co.uk",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-10-11 04:38:54",
          updatedAt: "2021-01-19 10:29:47",
        },
        {
          id: 6,
          firstName: "Meredith",
          lastName: "Creamer",
          age: 23,
          address: "37017 Fieldstone Road",
          phone: "611732944",
          email: "mcreamer4@va.gov",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-08-11 04:08:05",
          updatedAt: "2021-07-19 18:52:58",
        },
        {
          id: 7,
          firstName: "Zarah",
          lastName: "Crummey",
          age: 49,
          address: "42618 Fulton Road",
          phone: "590619357",
          email: "zcrummey5@etsy.com",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-10-05 20:20:22",
          updatedAt: "2021-06-16 01:45:04",
        },
        {
          id: 8,
          firstName: "Ruthanne",
          lastName: "Cakebread",
          age: 56,
          address: "5059 Sullivan Pass",
          phone: "209046485",
          email: "rcakebread6@tamu.edu",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-06-15 16:36:53",
          updatedAt: "2020-11-29 08:11:45",
        },
        {
          id: 9,
          firstName: "Hendrik",
          lastName: "Ajam",
          age: 45,
          address: "28499 Anhalt Plaza",
          phone: "549248286",
          email: "hajam7@latimes.com",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-01-04 13:56:13",
          updatedAt: "2021-04-05 23:24:24",
        },
        {
          id: 10,
          firstName: "Louis",
          lastName: "Josland",
          age: 40,
          address: "19 Manufacturers Trail",
          phone: "344055323",
          email: "ljosland8@clickbank.net",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-04-29 17:37:59",
          updatedAt: "2021-11-03 10:17:25",
        },
        {
          id: 11,
          firstName: "Durand",
          lastName: "oldey",
          age: 49,
          address: "45 Del Mar Place",
          phone: "844227893",
          email: "doldey9@google.com.hk",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-03-22 10:55:59",
          updatedAt: "2021-07-02 03:42:48",
        },
        {
          id: 12,
          firstName: "Shep",
          lastName: "Dawtry",
          age: 30,
          address: "22131 Rigney Drive",
          phone: "686119570",
          email: "sdawtrya@army.mil",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-03-19 09:28:38",
          updatedAt: "2021-11-26 16:24:00",
        },
        {
          id: 13,
          firstName: "Rogers",
          lastName: "Hellewell",
          age: 26,
          address: "69597 Holy Cross Court",
          phone: "215226785",
          email: "rhellewellb@qq.com",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-11-18 12:15:40",
          updatedAt: "2021-07-25 16:33:40",
        },
        {
          id: 14,
          firstName: "Bastian",
          lastName: "Jellman",
          age: 51,
          address: "463 Weeping Birch Circle",
          phone: "189400454",
          email: "bjellmanc@biglobe.ne.jp",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2020-12-15 09:37:42",
          updatedAt: "2021-11-13 21:27:21",
        },
        {
          id: 15,
          firstName: "Bear",
          lastName: "Tossell",
          age: 28,
          address: "6 Center Junction",
          phone: "704211595",
          email: "btosselld@google.nl",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-05-17 00:29:52",
          updatedAt: "2020-11-03 18:03:29",
        },
        {
          id: 16,
          firstName: "Jordon",
          lastName: "Spruce",
          age: 49,
          address: "2573 Eagan Way",
          phone: "480641780",
          email: "jsprucee@over-blog.com",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-03-24 14:24:54",
          updatedAt: "2021-03-28 02:38:34",
        },
        {
          id: 17,
          firstName: "Lamond",
          lastName: "Deason",
          age: 42,
          address: "72 Jenifer Crossing",
          phone: "978661940",
          email: "ldeasonf@ifeng.com",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-04-11 07:39:23",
          updatedAt: "2021-03-02 03:12:13",
        },
        {
          id: 18,
          firstName: "Trish",
          lastName: "Fanton",
          age: 39,
          address: "355 Bonner Circle",
          phone: "255969352",
          email: "tfantong@redcross.org",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-04-07 06:01:46",
          updatedAt: "2021-06-10 00:54:37",
        },
        {
          id: 19,
          firstName: "Odessa",
          lastName: "Godard",
          age: 42,
          address: "9 Loomis Hill",
          phone: "473389499",
          email: "ogodardh@chicagotribune.com",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-10-06 13:33:39",
          updatedAt: "2021-10-29 21:34:05",
        },
        {
          id: 20,
          firstName: "Kevin",
          lastName: "Yakubovich",
          age: 30,
          address: "598 Corscot Trail",
          phone: "906261639",
          email: "kyakubovichi@netvibes.com",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-05-02 08:17:50",
          updatedAt: "2021-04-26 11:53:19",
        },
        {
          id: 21,
          firstName: "Marijn",
          lastName: "Crudgington",
          age: 36,
          address: "9 Fuller Parkway",
          phone: "532739293",
          email: "mcrudgingtonj@alibaba.com",
          password: bcrypt.hashSync(
            "password",
            Number.parseInt(authConfig.rounds)
          ),
          createdAt: "2021-05-17 09:21:37",
          updatedAt: "2020-12-17 18:07:13",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
