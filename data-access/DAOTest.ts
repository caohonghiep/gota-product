
import {Connection} from "./Connection";
import {clearInterval} from "timers";
import {ProductDAO, CategoryDAO} from "./DAO";
import {Category, Product} from "./model";

let interval = setInterval(async ()=> {
    if(Connection.db){
        clearInterval(interval);
        let productDAO = new ProductDAO();
        let categoryDAO = new CategoryDAO();
        //let user = await userDao.create(new User("Hiep","Cao",18));
        //console.log(JSON.stringify(user));
        //let id ='58cd7339b56ae418c02e39e5';
        // let user = await userDao.read(id);
        // console.log(JSON.stringify(user));
        // userDao.update(id,{age:10});
        // let user = await userDao.read(id);
        // console.log(JSON.stringify(user));
        // await  userDao.delete(id);
       //let  users = await userDao.deleteMany({});

        //console.log(JSON.stringify(users));

        /*
        categoryDAO.createMany([
            new Category(
                {
                    _path:'do-tre-em',
                    name:'Đồ Trẻ Em',

                }
            ),
            new Category(
                {
                    _path:'do-nguoi-lon',
                    name:'Đồ Người Lớn',

                }
            ),
            new Category(
                {
                    _path:'phu-kien',
                    name:'Phụ Kiện',

                }
            )

        ]);
        */

        let products =
        [{
            "_id":"crochet-croptop-yobk04",
            "categoryId": "58ce7a0c5d30ca231866514b",
            "code": "YOBK04",
            "name": "Crochet Croptop",
            "description": "YOHandmade nhận thiết kế và làm theo mẫu khách yêu cầu tùy theo số đo và màu sắc khách lựa chọn. Đối với các sản phẩm order, thời gian giao hàng là 7 ngày. Nếu khách cần gấp có thể Inbox shop để được hỗ trợ giao sớm hơn thời gian quy định.",
            "price": "220000",
            "colors": [
                "white",
                "blue"
            ],
            "images": [
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/12385064_723862917716192_1476982395_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/13720900_1149190421789570_1659224465_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/12409089_1208649792513750_705228244_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/12679207_890831901021509_1342655349_n.jpg"
            ]
        }, {
            "_id":"crochet-bikini-yobk05",
            "categoryId": "58ce7a0c5d30ca231866514b",
            "code": "YOBK05",
            "name": "Crochet Bikini",
            "description": "YOHandmade nhận thiết kế và làm theo mẫu khách yêu cầu tùy theo số đo và màu sắc khách lựa chọn. Đối với các sản phẩm order, thời gian giao hàng là 7 ngày. Nếu khách cần gấp có thể Inbox shop để được hỗ trợ giao sớm hơn thời gian quy định.",
            "price": "220000",
            "colors": [
                "white",
                "blue"
            ],
            "images": [
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p552x414/12521117_852038504924884_168815462_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/12532715_972295402825540_1720386099_n.jpg"
            ]
        }, {
            "_id":"crochet-bikini-yobk06",
            "categoryId": "58ce7a0c5d30ca231866514b",
            "code": "YOBK06",
            "name": "Crochet Bikini",
            "description": "YOHandmade nhận thiết kế và làm theo mẫu khách yêu cầu tùy theo số đo và màu sắc khách lựa chọn. Đối với các sản phẩm order, thời gian giao hàng là 7 ngày. Nếu khách cần gấp có thể Inbox shop để được hỗ trợ giao sớm hơn thời gian quy định.",
            "price": "220000",
            "colors": [
                "white",
                "blue"
            ],
            "images": [
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/13720965_1135420269858886_952469125_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/13718221_1017410645020754_894383610_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/14058406_1045932182195087_866659026_n.jpg"
            ]
        }, {
            "_id":"crochet-bikini-yobk02",
            "categoryId": "58ce7a0c5d30ca231866514b",
            "code": "YOBK02",
            "name": "Crochet Bikini",
            "description": "YOHandmade nhận thiết kế và làm theo mẫu khách yêu cầu tùy theo số đo và màu sắc khách lựa chọn. Đối với các sản phẩm order, thời gian giao hàng là 7 ngày. Nếu khách cần gấp có thể Inbox shop để được hỗ trợ giao sớm hơn thời gian quy định.",
            "price": "220000",
            "colors": [
                "white",
                "blue"
            ],
            "images": [
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058437_1047828665333126_230186025_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058438_1249034168462773_2024676755_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058553_1145600828847307_632517204_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14057565_1102635733157403_615547144_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14057565_1102635733157403_615547144_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14057615_988562807923063_1823830040_n.jpg"
            ]
        }, {
            "_id":"crochet-bikini-yobk01",
            "categoryId": "58ce7a0c5d30ca231866514b",
            "code": "YOBK01",
            "name": "Crochet Bikini",
            "description": "YOHandmade nhận thiết kế và làm theo mẫu khách yêu cầu tùy theo số đo và màu sắc khách lựa chọn. Đối với các sản phẩm order, thời gian giao hàng là 7 ngày. Nếu khách cần gấp có thể Inbox shop để được hỗ trợ giao sớm hơn thời gian quy định.",
            "price": "220000",
            "colors": [
                "white",
                "blue"
            ],
            "images": [
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p403x403/14057660_1166291186765312_995853360_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/14058475_1294244793949338_1635297853_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/12532655_565437693581386_1423845041_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p403x403/12503495_1283323198347272_694744973_n.jpg"
            ]
        }, {
            "_id":"crochet-croptop-yobk02",
            "categoryId": "58ce7a0c5d30ca231866514b",
            "code": "YOBK02",
            "name": "Crochet Croptop",
            "description": "YOHandmade nhận thiết kế và làm theo mẫu khách yêu cầu tùy theo số đo và màu sắc khách lựa chọn. Đối với các sản phẩm order, thời gian giao hàng là 7 ngày. Nếu khách cần gấp có thể Inbox shop để được hỗ trợ giao sớm hơn thời gian quy định.",
            "price": "220000",
            "colors": [
                "white",
                "blue"
            ],
            "images": [
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/12061648_1087854971266587_2050583258_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/12124776_982233951857370_1369768921_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/12061493_1069209793109455_598448545_n.jpg",
                "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p180x540/12061682_903883583058614_1250232220_n.jpg"
            ]
        },
            {
                "_id":"crochet-bikini-yobk04",
                "categoryId": "58ce7a0c5d30ca231866514b",
                "code": "YOBK04",
                "name": "Crochet Bikini",
                "description": "YOHandmade nhận thiết kế và làm theo mẫu khách yêu cầu tùy theo số đo và màu sắc khách lựa chọn. Đối với các sản phẩm order, thời gian giao hàng là 7 ngày. Nếu khách cần gấp có thể Inbox shop để được hỗ trợ giao sớm hơn thời gian quy định.",
                "price": "220000",
                "colors": [
                    "white",
                    "blue"
                ],
                "images": [
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058358_1273572072694431_246482254_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/13720741_778075352295949_1591999041_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058404_1143981028992778_1951932585_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14057535_1156815087741969_1310519794_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14057636_950954148338082_118641469_n.jpg"
                ]
            },
            {
                "_id":"crochet-bikini-yobk03",
                "categoryId": "58ce7a0c5d30ca231866514b",
                "code": "YOBK03",
                "name": "Crochet Bikini",
                "description": "YOHandmade nhận thiết kế và làm theo mẫu khách yêu cầu tùy theo số đo và màu sắc khách lựa chọn. Đối với các sản phẩm order, thời gian giao hàng là 7 ngày. Nếu khách cần gấp có thể Inbox shop để được hỗ trợ giao sớm hơn thời gian quy định.",
                "price": "220000",
                "colors": [
                    "white",
                    "blue"
                ],
                "images": [
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058359_1060245590691708_904487945_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058346_1100672280020238_2031139156_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058601_1074809089221682_751272247_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058624_963180067142102_1207116573_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058625_1204306142973945_223447853_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058396_1223635887668141_409808137_n.jpg"
                ]
            },
            {
                "_id":"crochet-croptop-yoct01",
                "categoryId": "58ce7a0c5d30ca231866514b",
                "code": "YOCT01",
                "name": "Crochet Croptop",
                "description": "YOHandmade nhận thiết kế và làm theo mẫu khách yêu cầu tùy theo số đo và màu sắc khách lựa chọn. Đối với các sản phẩm order, thời gian giao hàng là 7 ngày. Nếu khách cần gấp có thể Inbox shop để được hỗ trợ giao sớm hơn thời gian quy định.",
                "price": "220000",
                "colors": [
                    "white",
                    "blue"
                ],
                "images": [
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058359_1060245590691708_904487945_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058346_1100672280020238_2031139156_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058601_1074809089221682_751272247_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058624_963180067142102_1207116573_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058625_1204306142973945_223447853_n.jpg",
                    "https://scontent.fsgn4-1.fna.fbcdn.net/t45.5328-0/p370x247/14058396_1223635887668141_409808137_n.jpg"
                ]
            }
        ];

        products.forEach(p=>{
            productDAO.create(new Product(p));
        })


    }
},500);
