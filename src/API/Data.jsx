import gussie from '../Assets/Images/gussie.png'
import nora from '../Assets/Images/nora.png'
import belle from '../Assets/Images/belle.png'
import eunice from '../Assets/Images/eunice.png'
import emma from '../Assets/Images/emma.png'
import leah from '../Assets/Images/leah.png'
import dollie from '../Assets/Images/dollie.png'
import briefhistory from '../Assets/Images/briefhistory.png'
import selecting from '../Assets/Images/selecting.png'
import asteroid from '../Assets/Images/asteroid.png'
import telescope from '../Assets/Images/telescope.png'
import medicalcare from '../Assets/Images/medicalcare.png'
import moon from '../Assets/Images/moon.png'
import pink_boy from '../Assets/Images/pink-boy.png'
import brown_boy from '../Assets/Images/brown-boy.png'
import red_girl from '../Assets/Images/red-girl.png'
import food_logo from '../Assets/Images/foodlogo.png'
import ice_cream from '../Assets/Images/ice-cream.png'
import cherry from '../Assets/Images/cherry.png'
import wok from '../Assets/Images/wok.png'
import orange from '../Assets/Images/orange.png'
import donut from '../Assets/Images/donut.png'
import watermelon from '../Assets/Images/watermelon.png'
import audioplayer from '../Assets/Images/audioplayer.png'
import flora from '../Assets/Images/flora.png'
import violet from '../Assets/Images/violet.png'
import philiph from '../Assets/Images/philiph.png'
import balloon from '../Assets/Images/balloons.png'
import lamp from '../Assets/Images/lamp.png'
import flower from '../Assets/Images/flower.png'
import pineapple from '../Assets/Images/pineapple.png'
import sousage from '../Assets/Images/sausage.png'


let data = [
    {
        id: 1,
        name: 'Gussie Singleton',
        avatar: gussie,
    },
    {
        id: 2,
        name: 'Nora Francis',
        avatar: nora
    },
    {
        id: 3,
        name: 'Belle Briggs',
        avatar: belle
    },
    {
        id: 4,
        name: 'Eunice Cortez',
        avatar: eunice
    },
    {
        id: 5,
        name: 'Emma Hanson',
        avatar: emma
    },
    {
        id: 6,
        name: 'Leah Berry',
        avatar: leah
    }
]

let Users = [
    {
        userid: 1,
        userImg: dollie,
        name: 'Gussie Singleton',
        following: 245,
        published: 'Published on 14 Jun 2019',
        text: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. '
    },
    {
        userid: 2,
        userImg: nora,
        name: 'Nora Francis',
        following: 245,
        published: 'Published on 14 Jun 2019',
        text: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. '
    },
    {
        userid: 3,
        userImg: belle,
        name: 'Belle Briggs',
        following: 245,
        published: 'Published on 14 Jun 2019',
        text: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. '
    },
    {
        userid: 4,
        userImg: eunice,
        name: 'Eunice Cortez',
        following: 245,
        published: 'Published on 14 Jun 2019',
        text: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. '
    },
    {
        userid: 5,
        userImg: emma,
        name: 'Emma Hanson',
        following: 245,
        published: 'Published on 14 Jun 2019',
        text: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. '
    },
    {
        userid: 6,
        userImg: nora,
        name: 'Leah Berry',
        following: 245,
        published: 'Published on 14 Jun 2019',
        text: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. '
    },
    {
        userid: 7,
        userImg: dollie,
        name: 'Dollie Blair',
        following: 245,
        published: 'Published on 14 Jun 2019',
        text: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. '
    },
    {
        userid: 8,
        userImg: food_logo,
        name: 'Food & Drink',
        following: 245,
        published: 'Published on 14 Jun 2019',
        text: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. '
    },
    {
        userid: 9,
        userImg: "https://via.placeholder.com/600/4d564d",
        name: 'Gussie French',
        following: 245,
        text: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. '
    },
    {
        userid: 10,
        userImg: "https://via.placeholder.com/600/f9f067",
        name: 'Edward Osborne',
        following: 245,
        text: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. '
    }
]


let Posts = [
    {
        id: 1,
        postId: 7,
        postImg: briefhistory,
        title: 'A Brief History Of Creation',
        additional: '80k views  ·  3 days ago',
        author: 'Dollie Blair',
        isRec: false,
        time: '4:15',
        video: 'https://www.youtube.com/embed/TnyNm0HKtRM',
        views: 80,
        likes: 60,
        dislikes: 10,
    },
    {
        id: 2,
        postId: 7,
        postImg: selecting,
        title: 'Selecting The Right Hotel',
        additional: '123k views  ·  1 months ago',
        author: 'Dollie Blair',
        isRec: false,
        time: '10:05',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 3,
        postId: 7,
        postImg: asteroid,
        title: 'Asteroids',
        additional: '43k views  ·  12 days ago',
        author: 'Dollie Blair',
        isRec: false,
        time: '6:22',
        video: 'https://www.youtube.com/embed/gRwHyuqgwa8',
        views: 43,
        likes: 15,
        dislikes: 5
    },
    {
        id: 4,
        postId: 7,
        postImg: telescope,
        title: 'Telescopes 101',
        additional: '11k views  ·  6 months ago',
        author: 'Dollie Blair',
        isRec: false,
        time: '12:00',
        video: 'https://www.youtube.com/embed/mYhy7eaazIk',
        views: 11,
        likes: 6,
        dislikes: 3
    },
    {
        id: 5,
        postId: 7,
        postImg: medicalcare,
        title: 'Medical Care Is Just',
        additional: '18k views  ·  2 days ago',
        author: 'Dollie Blair',
        isRec: false,
        time: '12:01',
        video: 'https://www.youtube.com/embed/KAM6kaOzCXM',
        views: 18,
        likes: 8,
        dislikes: 5
    },
    {
        id: 6,
        postId: 7,
        postImg: moon,
        title: 'Moon Gazing',
        additional: '67k views  ·  4 months ago',
        author: 'Dollie Blair',
        isRec: false,
        time: '0:59',
        video: 'https://www.youtube.com/embed/tSA77WTlbbE',
        views: 67,
        likes: 50,
        dislikes: 2
    },
    {
        id: 7,
        postId: 9,
        postImg: pink_boy,
        title: 'Dude You Re Getting A Telescope',
        additional: '34k views  ·  5 months ago',
        author: 'Gussie French',
        isRec: true,
        time: '3:40',
        video: 'https://www.youtube.com/embed/7AR4yntqLsQ',
        views: 34,
        likes: 20,
        dislikes: 1
    },
    {
        id: 8,
        postId: 10,
        postImg: brown_boy,
        title: 'Moon Gazing',
        additional: '54k views  ·  11 months ago',
        author: 'Edward Osborne',
        isRec: true,
        time: '2:12',
        video: 'https://www.youtube.com/embed/Kk0WDAj9r4Q',
        views: 54,
        likes: 30,
        dislikes: 7
    },
    {
        id: 9,
        postId: 7,
        postImg: red_girl,
        title: 'Moon Gazing',
        additional: '125k views  ·  4 months ago',
        author: 'Dollie Blair',
        isRec: true,
        time: '8:35',
        video: 'https://www.youtube.com/embed/FcRk-B5pun4',
        views: 125,
        likes: 100,
        dislikes: 10
    },
    {
        id: 10,
        postId: 8,
        postImg: ice_cream,
        title: 'Astronomy Or Astrology',
        additional: '240k views  ·  4 days ago',
        author: 'Food & Drink',
        time: '4:09',
        video: '"https://www.youtube.com/embed/goWDPcca8nc',
        views: 240,
        likes: 260,
        dislikes: 115
    },
    {
        id: 11,
        postId: 8,
        postImg: cherry,
        title: 'Advertising Outdoors',
        additional: '13k views  ·  15 days ago',
        author: 'Food & Drink',
        time: '1:59',
        video: 'https://www.youtube.com/embed/oqaf_rNfAro',
        views: 13,
        likes: 9,
        dislikes: 1
    },
    {
        id: 12,
        postId: 8,
        postImg: wok,
        title: 'Radio Astronomy',
        additional: '1k views  ·  11 months ago',
        author: 'Food & Drink',
        time: '6:40',
        video: 'https://www.youtube.com/embed/qsY7Iqv2yV0',
        views: 1,
        likes: 0.4,
        dislikes: 0.1
    },
    {
        id: 13,
        postId: 8,
        postImg: orange,
        title: 'A Good Autoresponder',
        additional: '45k views  ·  2 months ago',
        author: 'Food & Drink',
        time: '4:16',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 14,
        postId: 8,
        postImg: donut,
        title: 'Baby Monitor Technology',
        additional: '86k views  ·  7 days ago',
        author: 'Food & Drink',
        time: '2:56',
        video: 'https://www.youtube.com/embed/ebb4wwdBsig',
        views: 86,
        likes: 82,
        dislikes: 1
    },
    {
        id: 15,
        postId: 7,
        postImg: watermelon,
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/n0YchnkTq4Q',
        views: 123,
        likes: 96,
        dislikes: 15
    },
    {
        id: 16,
        postId: 8,
        postImg: balloon,
        title: 'Astronomy Or Astrology',
        additional: '240k views  ·  4 months ago',
        author: 'Food & Drink',
        time: '4:09',
        video: '"https://www.youtube.com/embed/goWDPcca8nc',
        views: 240,
        likes: 260,
        dislikes: 115
    },
    {
        id: 17,
        postId: 8,
        postImg: lamp,
        title: 'Advertising Outdoors',
        additional: '13k views  ·  15 days ago',
        author: 'Food & Drink',
        time: '1:59',
        video: 'https://www.youtube.com/embed/oqaf_rNfAro',
        views: 13,
        likes: 9,
        dislikes: 1
    },
    {
        id: 18,
        postId: 8,
        postImg: flower,
        title: 'Radio Astronomy',
        additional: '1k views  ·  11 months ago',
        author: 'Food & Drink',
        time: '6:40',
        video: 'https://www.youtube.com/embed/qsY7Iqv2yV0',
        views: 1,
        likes: 0.4,
        dislikes: 0.1
    },
    {
        id: 19,
        postId: 8,
        postImg: watermelon,
        title: 'A Good Autoresponder',
        additional: '45k views  ·  2 months ago',
        author: 'Food & Drink',
        time: '4:16',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 20,
        postId: 8,
        postImg: pineapple,
        title: 'Baby Monitor Technology',
        additional: '86k views  ·  7 days ago',
        author: 'Food & Drink',
        time: '2:56',
        video: 'https://www.youtube.com/embed/ebb4wwdBsig',
        views: 86,
        likes: 82,
        dislikes: 1
    },
    {
        id: 21,
        postId: 7,
        postImg: sousage,
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/n0YchnkTq4Q',
        views: 123,
        likes: 96,
        dislikes: 15
    },
    {
        id: 22,
        postId: 1,
        postImg: 'https://via.placeholder.com/600/66b7d2',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '6:40',
        video: 'https://www.youtube.com/embed/qsY7Iqv2yV0',
        views: 1,
        likes: 0.4,
        dislikes: 0.1
    },
    {
        id: 23,
        postId: 1,
        postImg: 'https://via.placeholder.com/600/197d29',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '6:40',
        video: 'https://www.youtube.com/embed/qsY7Iqv2yV0',
        views: 1,
        likes: 0.4,
        dislikes: 0.1
    },
    {
        id: 24,
        postId: 1,
        postImg: 'https://via.placeholder.com/600/61a65',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '6:40',
        video: 'https://www.youtube.com/embed/qsY7Iqv2yV0',
        views: 1,
        likes: 0.4,
        dislikes: 0.1
    },
    {
        id: 25,
        postId: 1,
        postImg: 'https://via.placeholder.com/600/f9cee5',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '6:40',
        video: 'https://www.youtube.com/embed/qsY7Iqv2yV0',
        views: 1,
        likes: 0.4,
        dislikes: 0.1
    },
    {
        id: 26,
        postId: 1,
        postImg: 'https://via.placeholder.com/600/fdf73e',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '6:40',
        video: 'https://www.youtube.com/embed/qsY7Iqv2yV0',
        views: 1,
        likes: 0.4,
        dislikes: 0.1
    },
    {
        id: 27,
        postId: 1,
        postImg: 'https://via.placeholder.com/600/9c184f',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:09',
        video: '"https://www.youtube.com/embed/goWDPcca8nc',
        views: 240,
        likes: 260,
        dislikes: 115
    },
    {
        id: 28,
        postId: 2,
        postImg: 'https://via.placeholder.com/600/66b7d2',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '10:05',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 29,
        postId: 2,
        postImg: 'https://via.placeholder.com/600/197d29',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '10:05',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 30,
        postId: 2,
        postImg: 'https://via.placeholder.com/600/61a65',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 31,
        postId: 2,
        postImg: 'https://via.placeholder.com/600/f9cee5',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 33,
        postId: 2,
        postImg: 'https://via.placeholder.com/600/fdf73e',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 34,
        postId: 2,
        postImg: 'https://via.placeholder.com/600/9c184f',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 35,
        postId: 3,
        postImg: 'https://via.placeholder.com/600/66b7d2',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 36,
        postId: 3,
        postImg: 'https://via.placeholder.com/600/197d29',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 37,
        postId: 3,
        postImg: 'https://via.placeholder.com/600/61a65',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 38,
        postId: 3,
        postImg: 'https://via.placeholder.com/600/f9cee5',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 39,
        postId: 3,
        postImg: 'https://via.placeholder.com/600/fdf73e',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:09',
        video: '"https://www.youtube.com/embed/goWDPcca8nc',
        views: 240,
        likes: 260,
        dislikes: 115
    },
    {
        id: 40,
        postId: 3,
        postImg: 'https://via.placeholder.com/600/9c184f',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 41,
        postId: 4,
        postImg: 'https://via.placeholder.com/600/66b7d2',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 42,
        postId: 4,
        postImg: 'https://via.placeholder.com/600/197d29',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 43,
        postId: 4,
        postImg: 'https://via.placeholder.com/600/61a65',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 44,
        postId: 4,
        postImg: 'https://via.placeholder.com/600/f9cee5',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 45,
        postId: 4,
        postImg: 'https://via.placeholder.com/600/fdf73e',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/U0Wwu4UJI2A',
        views: 123,
        likes: 110,
        dislikes: 5
    },
    {
        id: 46,
        postId: 4,
        postImg: 'https://via.placeholder.com/600/9c184f',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15'
    },
    {
        id: 47,
        postId: 5,
        postImg: 'https://via.placeholder.com/600/66b7d2',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 48,
        postId: 5,
        postImg: 'https://via.placeholder.com/600/197d29',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 49,
        postId: 5,
        postImg: 'https://via.placeholder.com/600/61a65',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 50,
        postId: 5,
        postImg: 'https://via.placeholder.com/600/f9cee5',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 51,
        postId: 5,
        postImg: 'https://via.placeholder.com/600/fdf73e',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 52,
        postId: 5,
        postImg: 'https://via.placeholder.com/600/9c184f',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 53,
        postId: 6,
        postImg: 'https://via.placeholder.com/600/66b7d2',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 54,
        postId: 6,
        postImg: 'https://via.placeholder.com/600/197d29',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 55,
        postId: 6,
        postImg: 'https://via.placeholder.com/600/61a65',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 56,
        postId: 6,
        postImg: 'https://via.placeholder.com/600/f9cee5',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 57,
        postId: 6,
        postImg: 'https://via.placeholder.com/600/fdf73e',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    {
        id: 58,
        postId: 6,
        postImg: 'https://via.placeholder.com/600/9c184f',
        title: 'Asteroids',
        additional: '123k views  ·  4 months ago',
        author: 'Dollie Blair',
        time: '4:15',
        video: 'https://www.youtube.com/embed/uLUdl4Sk-a4',
        views: 45,
        likes: 36,
        dislikes: 6
    },
    //Channel Img
    {
        id: 59,
        channelId: 1,
        channelImg: 'https://via.placeholder.com/600/771796',
        channelTitle: 'Choosing The Best Audio Player Software For Your Computer',
        channel_description: 'Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. ',
        additional: '11k views  ·  6 months ago',
        time: '4:15',
        video: 'https://www.youtube.com/embed/TnyNm0HKtRM',
        views: 80,
        likes: 60,
        dislikes: 10,
    },
    {
        id: 60,
        channelId: 2,
        channelImg: 'https://via.placeholder.com/600/24f355',
        channelTitle: 'Choosing The Best Audio Player Software For Your Computer',
        channel_description: 'Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. ',
        additional: '11k views  ·  6 months ago',
        time: '4:15',
        video: 'https://www.youtube.com/embed/TnyNm0HKtRM',
        views: 80,
        likes: 60,
        dislikes: 10,
    },
    {
        id: 61,
        channelId: 3,
        channelImg: 'https://via.placeholder.com/600/d32776',
        channelTitle: 'Choosing The Best Audio Player Software For Your Computer',
        channel_description: 'Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. ',
        additional: '11k views  ·  6 months ago',
        time: '4:15',
        video: 'https://www.youtube.com/embed/TnyNm0HKtRM',
        views: 80,
        likes: 60,
        dislikes: 10,
    },
    {
        id: 62,
        channelId: 4,
        channelImg: 'https://via.placeholder.com/600/f66b97',
        channelTitle: 'Choosing The Best Audio Player Software For Your Computer',
        channel_description: 'Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. ',
        additional: '11k views  ·  6 months ago',
        time: '4:15',
        video: 'https://www.youtube.com/embed/TnyNm0HKtRM',
        views: 80,
        likes: 60,
        dislikes: 10,
    },
    {
        id: 63,
        channelId: 5,
        channelImg: 'https://via.placeholder.com/600/56a8c2',
        channelTitle: 'Choosing The Best Audio Player Software For Your Computer',
        channel_description: 'Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. ',
        additional: '11k views  ·  6 months ago',
        time: '4:15',
        video: 'https://www.youtube.com/embed/TnyNm0HKtRM',
        views: 80,
        likes: 60,
        dislikes: 10,
    },
    {
        id: 64,
        channelId: 6,
        channelImg: 'https://via.placeholder.com/600/b0f7cc',
        channelTitle: 'Choosing The Best Audio Player Software For Your Computer',
        channel_description: 'Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. ',
        additional: '11k views  ·  6 months ago',
        time: '4:15',
        video: 'https://www.youtube.com/embed/TnyNm0HKtRM',
        views: 80,
        likes: 60,
        dislikes: 10,
    },
    {
        id: 65,
        channelId: 7,
        channelImg: 'https://via.placeholder.com/540/92c952',
        channelTitle: 'Choosing The Best Audio Player Software For Your Computer',
        channel_description: 'Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. ',
        additional: '11k views  ·  6 months ago',
        time: '4:15',
        video: 'https://www.youtube.com/embed/TnyNm0HKtRM',
        views: 80,
        likes: 60,
        dislikes: 10,
    },
    {
        id: 66,
        channelId: 8,
        channelImg: audioplayer,
        channelTitle: 'Choosing The Best Audio Player Software For Your Computer',
        channel_description: 'Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. ',
        additional: '11k views  ·  6 months ago',
        time: '4:15',
        video: 'https://www.youtube.com/embed/TnyNm0HKtRM',
        views: 80,
        likes: 60,
        dislikes: 10,
    },
]

let recUsers = [
    {
        id: 1,
        name: 'Flora Benson',
        avatar: flora
    },
    {
        id: 2,
        name: 'Violet Cobb',
        avatar: violet
    },
    {
        id: 3,
        name: 'Phillip Mullins',
        avatar: philiph
    }
]


export { data, Users, Posts, recUsers }