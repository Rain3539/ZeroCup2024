const ChineseData = [
    {
        name: "乒乓球",
        sorts: [{ eventname: "混合双打", player: ["孙颖莎", "王楚钦"], describe: "中国第6金,混双金牌", picture: ["../../public/source/img/fan.jpg","../../public/source/img/fan.jpg","../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子团体", player: ["王楚钦", "马龙", "樊振东"], describe: "中国第32金,国乒男团奥运5连冠", picture: ["../../public/source/img/fan.jpg","../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子团体", player: ["陈梦","孙颖莎","王曼昱"], describe: "中国第37金,夺夏奥第300金,国乒女团奥运5连冠",picture:[ "../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子单打", player: ["陈梦"], describe: "中国第14金卫冕女单金牌", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子单打", player: ["孙颖莎"], describe: "女单银牌", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子单打", player: ["樊振东"], describe: "中国第17金，成就大满贯", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" }],
        player: [{ name: "樊振东", alias: "小胖、肥仔东、暴力熊猫、“花季老将”", achievement: "中国乒乓球运动员、巴黎奥运会金牌得主、乒乓球大满贯得主", comments: "樊振东给人的感觉，特别像一架战斗机，有着最好的发动机、最先进的结构设计，但是各种先进的因素集中在一起，更需要慢慢磨合，形成合力。当他心无旁骛，克服一切干扰，集中所有力量加速度突破阻挡在他面前的音障之后，那片天空，就是属于他的未来。", img: "../../public/source/img/fan.jpg" },
        { name: "陈梦", alias: "大梦", achievement: "中国乒乓球运动员、巴黎奥运会金牌获得者", comments: "陈梦球好，综合素质好、球的功底和架子好，有一种初生牛犊不怕虎的气势", img: "../../public/source/img/fan.jpg" },
        { name: "马龙", alias: "Chinese Beast、六边形战士", achievement: "首位集奥运会、世锦赛、世界杯、亚运会、亚锦赛、亚洲杯、巡回赛总决赛、全运会单打冠军于一身的超级全满贯男子选手", comments: "马龙的球风很正，就像他本人。是球队公认最努力最有天赋的一个运动员，是“战术大师”。", img: "../../public/source/img/fan.jpg" },
        { name: "王曼昱", alias: "鳗鱼", achievement: "国际级运动健将，中国乒乓球运动员", comments: "曼昱平时不怎么爱说话，但做事心里很有数，那时的想法就能达到初中生的成熟度，并且在言语当中能感觉到其远大的理想。技术上领先是一方面，很重要的是心理、思想上比同龄孩子都要成熟，很多优良的内在素质是她成功的关键。", img: "../../public/source/img/fan.jpg" },
        { name: "王楚钦", alias: "大头", achievement: "国际级运动健将，巴黎奥运会乒乓球混双冠军", comments: "王楚钦正手进攻暴力的同时不失沉稳，反手快撕斜线更是经常打出穿越球，关键时刻敢打敢拼，狠劲不输“藏獒”", img: "../../public/source/img/fan.jpg" },
        { name: "孙颖莎", alias: "小魔王、莎莎、人间止藤片、小豆包", achievement: "现女单世界第一、WTT大满贯赛史上首位“三冠王”", comments: "她清楚地意识到，只有熟悉每一个对手，站在场上才能不慌。她知道自己要什么，并为之不顾一切，同时她也会在比赛中总结点滴的经验，有信念、有拼劲，也有想法和策略。", img: "../../public/source/img/chen.jpg" }],
        image:"../../public/source/img/pingpongDesk.png"
    },
    {
        name: "游泳",
        sorts: [{ eventname: "男子100米自由泳", player: ["潘展乐"], describe: "金牌", picture: ["../../public/source/img/fan.jpg","../../public/source/img/fan.jpg","../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子4×100米混合接力", player: ["徐嘉余", "覃海洋", "潘展乐","王长浩","孙佳俊"], describe: "金牌", picture: ["../../public/source/img/fan.jpg","../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子100米仰泳", player: ["徐嘉余"], describe: "银牌", picture:[ "../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子100米蛙泳", player: ["唐钱婷"], describe: "银牌", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男女混合4×100米混合泳接力", player: ["徐嘉余","覃海洋","张雨霏","杨浚瑄","潘展乐","唐钱婷"], describe: "银牌", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子100米蛙泳", player: ["杨浚瑄","程玉洁","张雨霏","吴卿风","余依婷"], describe: "铜牌", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子100米蝶泳", player: ["张雨霏"], describe: "铜牌", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子200米蝶泳", player: ["张雨霏"], describe: "铜牌", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子100米蝶泳", player: ["杨浚瑄","李冰洁","葛楚彤","柳雅欣","孔雅琪","汤慕涵"], describe: "铜牌", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子200米个人混合泳", player: ["汪顺"], describe: "铜牌", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子50米自由泳", player: ["张雨霏"], describe: "铜牌", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子4×100米混合接力", player: ["万乐天","唐钱婷","张雨霏","杨浚瑄","汪雪儿","余依婷","吴卿风"], describe: "铜牌", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" }],
        player: [{ name: "潘展乐", alias: "PAN Zhanle", achievement: "男子100米自由泳世界纪录和奥运会纪录保持者，2024年巴黎奥运会男子100米自由泳冠军。", comments: "潘展乐是当今泳坛不可多得的天才型运动员，在短距离和长距离项目中展现出非凡实力，这种能力在游泳选手中颇为罕见。非常有天赋，是更高等级的上升，我觉得可以说是世界第一人。", img: "../../public/source/img/fan.jpg" },
        { name: "徐嘉余", alias: "Xu Jiayu", achievement: "2024年巴黎奥运会男子100米仰泳亚军、男子4x100米混合泳接力冠军", comments: "徐嘉余英俊、帅气，态度谦虚、平和、内敛，甚至还很羞涩腼腆。18岁时，达世界顶级水平，填补了中国男泳空白，已可称他是中国游泳界不折不扣的仰泳之王。", img: "../../public/source/img/fan.jpg" },
        { name: "覃海洋", alias: "Qin Haiyang", achievement: "2024年巴黎奥运会男女混合4X100米混合泳接力亚军、男子4x100米混合泳接力冠军", comments: "覃海洋的特点是心态比较稳、不怯场，在大型比赛中基本上能够赛出自己的实力，达到预期目标。他有很多闪光点，踏实肯干、坚持不懈、百折不挠，看似慢慢悠悠，其实内心坚定，不容易受到外界干扰。", img: "../../public/source/img/fan.jpg" },
        { name: "孙佳俊", alias: "Sun Jiajun", achievement: "2024年巴黎奥运会男子4x100米混合泳接力冠军", comments: "孙佳俊从小性格比较内敛，但认定的事情再苦再累都会坚持到底。谦和有礼的小伙子，在镜头和话筒前显得拘谨、紧张。", img: "../../public/source/img/fan.jpg" },
        { name: "唐钱婷", alias: "蛙蛙公主", achievement: "2024年巴黎奥运会女子100米蛙泳亚军、男女混合4×100米混合泳接力亚军、女子4×100米混合泳接力季军", comments: "唐钱婷的身高很出挑，爆发力好，具有良好的心理素质。她的各方面素质也不错，能吃苦，碰到什么困难都能自己克服，性格开朗。", img: "../../public/source/img/chen.jpg" },
        { name: "张雨霏", alias: "雨霏", achievement: "2024年巴黎奥运会女子4×100米自由泳接力季军、女子100米蝶泳季军、女子200米蝶泳季军、男女混合4×100米混合泳接力亚军、女子50米自由泳季军、女子4×100米混合泳接力季军", comments: "宁可肌肉在深夜里燃烧，不让情绪在失败中沉沦。哪吒，就是要脱胎换骨；蝶后，一定是蝶变之后，探索运动的极限，收割青春的金牌，冠军是胜者，更是逆境中崛起的人。", img: "../../public/source/img/chen.jpg" },
        { name: "杨浚瑄", alias: "淼淼", achievement: "2024年巴黎奥运会女子4×200米自由泳接力季军、男女4×100米混合泳接力亚军、女子4X100米混合泳接力季军", comments: "她在训练中很用心，有着很好的意志品质，最大的特点是执行力非常强。她这种爱思考、有执行力的素质，与长期坚持画画和写字对性格、心理方面的锤炼是有关系的。", img: "../../public/source/img/chen.jpg" },
        { name: "程玉洁", alias: "朵朵", achievement: "2024年巴黎奥运会女子4x100米自由泳接力决赛季军", comments: "程玉洁的水感好，水上姿态轻盈，抱水效率较高。程玉洁主要的技术特点是出发后前程拼得凶、中间顶得住，后程还能发力，具备优秀运动员的品质。", img: "../../public/source/img/chen.jpg" },
        { name: "李冰洁", alias: "狗冰", achievement: "东京奥运会女子4×200米自由泳接力冠军", comments: "李冰洁是中国泳坛涌现出的最大瑰宝，在中国泳坛阳盛阴衰的大背景下，李冰洁在泳坛取得优异成绩很有希望成长为中国泳坛未来的女子领军人。", img: "../../public/source/img/chen.jpg" },
         { name: "汤慕涵", alias: "汤汤", achievement: "2020年东京奥运会女子4×200米自由泳接力冠军，并打破该项目世界纪录。", comments: "汤慕涵不畏强手，奋力拼搏，向世界展示了中华体育健儿精湛的竞技水平、坚韧的意志品质和良好的精神风貌。", img: "../../public/source/img/chen.jpg" }],
        image:"../../public/source/img/swimmingBG.png"

    },
    {
        name: "体操",
        sorts: [{ eventname: "男子吊环", player: ["刘洋"], describe: "金", picture: ["../../public/source/img/fan.jpg","../../public/source/img/fan.jpg","../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子双杠", player: ["邹敬园"], describe: "金", picture:[ "../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "集体全能", player: ["丁欣怡","郭崎琪","郝婷","黄张嘉洋","王澜静"], describe: "金", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子团体赛", player: ["张博恒","肖若腾","邹敬园","苏炜德","刘洋"], describe: "银", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子全能", player: ["张博恒"], describe: "银", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子吊环", player: ["邹敬园"], describe: "银", picture: ["../../public/source/img/fan.jpg","../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子高低杠", player: ["邱祺缘"], describe: "银", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子平衡木", player: ["周雅琴"], describe: "银", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子全能", player: ["肖若腾"], describe: "铜", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子单杠决赛", player: ["张博恒"], describe: "铜", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" }],
        player: [{ name: "刘洋", alias: "Liu Yang", achievement: "2024年巴黎奥运会竞技体操男子团体亚军、竞技体操男子吊环金牌", comments: "刘洋的得分点主要依靠他力量型的移动和摆动相结合的动作，他的动作甚至被认为“犹如教科书般”的漂亮。", img: "../../public/source/img/fan.jpg" },
        { name: "邹敬园", alias: "园园", achievement: "巴黎奥运会竞技体操男子团体亚军、男子吊环亚军、男子双杠冠军", comments: "邹敬园的鞍马在少年时期就练得很好。手长，身体飘，可以说具备一名鞍马高手所有的潜质。世界公认的双杠王者，如今还有两个以自己名字命名的吊环动作。", img: "../../public/source/img/fan.jpg" },
        { name: "丁欣怡", alias: "欣怡", achievement: "2024年巴黎奥运会艺术体操团体全能冠军", comments: "在通往顶峰的这条路上，丁欣怡无数次茫然无措，无数次跌倒哭泣，但就在与自己的较劲儿中，她无数次获得力量，无数次地爬起来再出发。", img: "../../public/source/img/fan.jpg" },
        { name: "郭崎琪", alias: "崎琪", achievement: "2024年巴黎奥运会艺术体操团体全能冠军。", comments: "在中国艺术体操国家队中，有两名上海运动员——刘鑫和郭崎琪。她们看似柔弱的身躯，蕴藏着常人难以想象的刚强，正在日复一日辛苦打磨，只为在赛场释放优雅，如花绽放。", img: "../../public/source/img/fan.jpg" },
        { name: "郝婷", alias: "婷姐", achievement: "巴黎奥运会艺术体操团体全能冠军", comments: "这个孩子天生是练艺术体操的料子，悟性好、耐性足，而且非常刻苦。她训练时总是面带笑容，那双晶莹的大眼睛看着你，特别可爱。", img: "../../public/source/img/fan.jpg" },
        { name: "黄张嘉洋", alias: "小羚羊", achievement: "2024年巴黎奥运会艺术体操团体全能冠军", comments: "黄张嘉洋的国家队队友还给她起了个绰号，叫“小羚羊”。“因为她跳得特别轻盈，她的跳在全国来说都应该是数一数二的，所以称她为‘羚羊’", img: "../../public/source/img/chen.jpg" },
        { name: "王澜静", alias: "澜静", achievement: "2024年巴黎奥运会艺术体操团体全能冠军", comments: "王澜静得益于整个冬训阶段训练扎实，作为2024年国际体联艺术体操世界杯的首战，总体比较正常稳定，也发挥出了平常训练的水平", img: "../../public/source/img/chen.jpg" },
        { name: "张博恒", alias: "茶茶", achievement: "巴黎奥运会竞技体操男子团体亚军、竞技体操男子个人全能亚军、竞技体操男子单杠季军", comments: "张博恒不只是自己拼搏，还带动了整个队伍。他就像一个优秀的团长，带领全队冲锋陷阵。", img: "../../public/source/img/chen.jpg" },
        { name: "肖若腾", alias: "若腾", achievement: "巴黎奥运会体操男子团体亚军、竞技体操男子全能季军", comments: "肖若腾的特长是头脑聪明，他擅长琢磨难度，看别人比赛的视频，对技术方面自己的理解会多一点。", img: "../../public/source/img/chen.jpg" },
        { name: "苏炜德", alias: "小苏", achievement: "2024年巴黎奥运会竞技体操男子团体亚军", comments: "苏炜德在比赛中表现出了霸气十足的大将风范，整套动作不仅飘逸流畅，而且难度系数也最大。最终这名被誉为“转体哥”00后小伙，凭借一连串转体空翻接转体空翻令人眼花缭乱的精彩动作，征服了现场的裁判。", img: "../../public/source/img/chen.jpg" }],
        image:"../../public/source/img/gymnasticsBG.png"
    },
    {
        name: "射击",
        sorts: [{ eventname: "混合团体10米气步枪", player: ["黄雨婷","盛李豪"], describe: "第34金", picture: ["../../public/source/img/fan.jpg","../../public/source/img/fan.jpg","../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子10米气手枪", player: ["谢瑜"], describe: "第34金", picture: ["../../public/source/img/fan.jpg","../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子10米气步枪", player: ["盛李豪"], describe: "第34金", picture:[ "../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子50米步枪三姿", player: ["刘宇坤"], describe: "第34金", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子25米手枪速射", player: ["李越宏"], describe: "第34金", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子10米气步枪", player: ["黄雨婷"], describe: "银", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子多向飞碟", player: ["齐迎"], describe: "银", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "女子50米步枪三姿", player: ["张琼月"], describe: "铜", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "男子25米手枪速射", player: ["王鑫杰"], describe: "铜", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
        { eventname: "混合团体双向飞碟铜牌赛", player: ["吕健林","江伊婷 "], describe: "铜", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" }],
        player: [{ name: "黄雨婷", alias: "阿条本条", achievement: "2024年巴黎奥运会混合团体10米气步枪冠军、射击女子10米气步枪亚军", comments: "黄雨婷是比赛型选手，每逢大赛，她都能保持良好的心理和比赛状态，使她经常能够超水平发挥。除此之外，黄雨婷心理素质过硬，具有顽强的拼搏精神。", img: "../../public/source/img/fan.jpg" },
        { name: "盛李豪", alias: "干饭哥", achievement: "2024年巴黎奥运会射击混合团体10米气步枪冠军、射击男子10米气步枪决金牌并打破奥运会纪录", comments: "盛李豪比赛时的心态很平稳，情绪控制到位，能够一心专注于比赛过程，丝毫不受成绩的影响。", img: "../../public/source/img/fan.jpg" },
        { name: "谢瑜", alias: "玫瑰哥", achievement: "2024年巴黎奥运会射击男子10米气手枪金牌", comments: "刚满23岁的谢瑜是一名00后运动小将，2015年便开始接触射击运动，现在已经8年了。8年的时间让谢瑜从一个懵懂的小孩逐渐成长为一名目标清晰的专业运动员。", img: "../../public/source/img/fan.jpg" },
        { name: "刘宇坤", alias: "坤司", achievement: "巴黎奥运会射击男子步枪50米三姿金牌", comments: "刘宇坤最大的特点就是训练和比赛时不爱循规蹈矩，喜欢自己拿主意。他喜欢读书，遇到问题时喜欢在知识的海洋里寻找办法和答案，通过理性的思考来解决问题。这一点也是他再度走向冠军领奖台的关键。", img: "../../public/source/img/fan.jpg" },
        { name: "李越宏", alias: "越宏", achievement: "巴黎奥运会男子25米手枪速射金牌", comments: "进入巴黎奥运周期，李越宏更加严格要求自己，刻苦训练，保持状态。举枪，瞄准，扣动扳机这些动作的每个细节都力求完美。刻苦训练收到成效，为他增添了信心。", img: "../../public/source/img/fan.jpg" },
        { name: "齐迎", alias: "迎哥", achievement: "2024年巴黎奥运会射击男子多向飞碟亚军", comments: "他自幼酷爱射击运动，凭借着对这项运动的热爱，每天坚持训练数小时，不断钻研技术，精益求精，在各大赛事上多次取得优异成绩。", img: "../../public/source/img/chen.jpg" },
        { name: "张琼月", alias: "琼月", achievement: "2024年巴黎奥运会射击女子50米步枪三姿季军", comments: "她技术比较扎实，内心相当强大，从来对自己都有一股不服输的狠劲儿，在枪法上，她果敢快捷，张弛有度，生活中大度率性，比赛中认真细致，敢打敢拼。", img: "../../public/source/img/chen.jpg" },
        { name: "王鑫杰", alias: "杰哥", achievement: "2024年巴黎奥运会男子25米手枪速射季军", comments: "等他回来如果你们有机会采访他就知道，他非常坐得住，就像石佛一样，这种性格很适合射击这项运动。", img: "../../public/source/img/chen.jpg" }],
        image:"../../public/source/img/shottingBG.png"
    }
]

function getCNData(eventId){
    return ChineseData[eventId];
}
export{
    getCNData
}