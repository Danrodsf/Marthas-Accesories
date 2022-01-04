"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Messages",
      [
        {
          id: 1,
          userId: 1,
          message:
            "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
          adminId: 2,
          response:
            "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
          createdAt: "2021-11-04 04:21:11",
          updatedAt: "2021-10-30 04:37:39",
        },
        {
          id: 2,
          userId: 6,
          message:
            "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          adminId: 1,
          response: "Cras in purus eu magna vulputate luctus.",
          createdAt: "2021-12-13 03:16:56",
          updatedAt: "2021-05-26 19:24:36",
        },
        {
          id: 3,
          userId: 10,
          message:
            "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
          adminId: 2,
          response:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
          createdAt: "2021-04-13 06:34:23",
          updatedAt: "2022-01-07 22:09:02",
        },
        {
          id: 4,
          userId: 19,
          message:
            "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
          adminId: 2,
          response:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
          createdAt: "2021-02-15 15:47:21",
          updatedAt: "2021-10-01 09:16:21",
        },
        {
          id: 5,
          userId: 8,
          message:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
          adminId: 2,
          response:
            "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
          createdAt: "2021-03-19 15:46:13",
          updatedAt: "2021-09-12 02:17:57",
        },
        {
          id: 6,
          userId: 4,
          message:
            "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
          adminId: 2,
          response:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
          createdAt: "2021-08-30 09:41:56",
          updatedAt: "2021-07-01 20:15:40",
        },
        {
          id: 7,
          userId: 8,
          message:
            "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
          adminId: 2,
          response:
            "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
          createdAt: "2022-01-09 19:31:36",
          updatedAt: "2021-03-08 02:13:59",
        },
        {
          id: 8,
          userId: 10,
          message:
            "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          adminId: 1,
          response:
            "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
          createdAt: "2021-08-30 06:11:29",
          updatedAt: "2021-11-07 20:44:07",
        },
        {
          id: 9,
          userId: 14,
          message:
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
          adminId: 2,
          response:
            "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
          createdAt: "2021-01-09 14:21:15",
          updatedAt: "2020-12-23 19:54:31",
        },
        {
          id: 10,
          userId: 18,
          message:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
          adminId: 2,
          response: "Nullam porttitor lacus at turpis.",
          createdAt: "2021-02-19 13:48:22",
          updatedAt: "2021-02-08 21:57:22",
        },
        {
          id: 11,
          userId: 21,
          message:
            "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
          adminId: 2,
          response:
            "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          createdAt: "2021-05-22 11:13:48",
          updatedAt: "2021-06-09 19:48:58",
        },
        {
          id: 12,
          userId: 17,
          message:
            "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
          adminId: 2,
          response:
            "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
          createdAt: "2021-07-10 20:45:28",
          updatedAt: "2021-09-26 23:22:20",
        },
        {
          id: 13,
          userId: 14,
          message:
            "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
          adminId: 2,
          response:
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
          createdAt: "2021-11-11 15:35:44",
          updatedAt: "2020-12-29 17:03:44",
        },
        {
          id: 14,
          userId: 21,
          message:
            "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
          adminId: 2,
          response: "Praesent blandit lacinia erat.",
          createdAt: "2021-03-22 05:18:02",
          updatedAt: "2021-12-16 03:14:48",
        },
        {
          id: 15,
          userId: 13,
          message:
            "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
          adminId: 1,
          response:
            "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
          createdAt: "2021-04-02 16:36:47",
          updatedAt: "2021-07-09 09:12:35",
        },
        {
          id: 16,
          userId: 5,
          message: "In sagittis dui vel nisl.",
          adminId: 1,
          response:
            "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          createdAt: "2021-01-23 08:45:22",
          updatedAt: "2021-01-18 02:07:28",
        },
        {
          id: 17,
          userId: 9,
          message:
            "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
          adminId: 2,
          response:
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
          createdAt: "2021-08-13 15:08:43",
          updatedAt: "2022-01-02 21:39:42",
        },
        {
          id: 18,
          userId: 16,
          message:
            "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
          adminId: 1,
          response:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
          createdAt: "2021-05-14 12:46:57",
          updatedAt: "2021-09-26 11:00:57",
        },
        {
          id: 19,
          userId: 12,
          message:
            "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          adminId: 2,
          response: "Cras non velit nec nisi vulputate nonummy.",
          createdAt: "2021-10-30 09:00:48",
          updatedAt: "2021-05-26 03:00:35",
        },
        {
          id: 20,
          userId: 7,
          message:
            "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
          adminId: 2,
          response:
            "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
          createdAt: "2021-03-20 10:15:38",
          updatedAt: "2021-03-30 18:28:21",
        },
        {
          id: 21,
          userId: 3,
          message:
            "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
          adminId: 2,
          response:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
          createdAt: "2021-11-17 02:35:52",
          updatedAt: "2021-02-14 14:46:14",
        },
        {
          id: 22,
          userId: 14,
          message:
            "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          adminId: 2,
          response: "Praesent id massa id nisl venenatis lacinia.",
          createdAt: "2020-12-16 05:37:00",
          updatedAt: "2022-01-06 12:50:44",
        },
        {
          id: 23,
          userId: 7,
          message:
            "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
          adminId: 1,
          response:
            "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
          createdAt: "2021-02-01 22:50:01",
          updatedAt: "2021-12-19 01:21:24",
        },
        {
          id: 24,
          userId: 15,
          message:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
          adminId: 1,
          response:
            "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
          createdAt: "2021-12-26 00:16:22",
          updatedAt: "2021-07-28 07:39:17",
        },
        {
          id: 25,
          userId: 10,
          message:
            "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          adminId: 2,
          response:
            "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
          createdAt: "2021-07-29 04:43:41",
          updatedAt: "2021-02-19 03:21:27",
        },
        {
          id: 26,
          userId: 3,
          message:
            "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
          adminId: 2,
          response:
            "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
          createdAt: "2022-01-07 15:42:03",
          updatedAt: "2021-08-22 21:07:50",
        },
        {
          id: 27,
          userId: 11,
          message:
            "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          adminId: 2,
          response:
            "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
          createdAt: "2021-01-14 17:32:14",
          updatedAt: "2021-08-23 01:01:29",
        },
        {
          id: 28,
          userId: 16,
          message:
            "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          adminId: 1,
          response:
            "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
          createdAt: "2021-06-11 23:26:57",
          updatedAt: "2021-04-17 14:55:55",
        },
        {
          id: 29,
          userId: 14,
          message:
            "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          adminId: 1,
          response:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
          createdAt: "2021-08-20 00:24:14",
          updatedAt: "2021-04-23 07:05:45",
        },
        {
          id: 30,
          userId: 11,
          message: "Nulla justo.",
          adminId: 2,
          response: "Quisque ut erat.",
          createdAt: "2021-02-12 01:41:14",
          updatedAt: "2021-12-17 12:17:14",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Messages", null, {});
  },
};
