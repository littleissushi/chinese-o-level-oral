// 口试好句思维导图 — 按主题排列（课程顺序），每个主题给出英文答题结构 + 中文好句顺序
// 结构：TOPIC（按课程顺序）→ outline（英文结构提纲）→ sentences（中文好句，按说话顺序排列）

const PHRASE_MAP = [
  // ============================================================
  // 中二 单元一：爱的表达
  // ============================================================
  {
    topic: "爱的表达",
    unit: "中二单元一",
    color: "#c0392b",
    desc: "亲情表达方式、管教松紧、双薪家庭挑战、孝道",
    outline: [
      "1. State that love needs to be expressed, not assumed — silence breeds 隔阂",
      "2. Acknowledge people express/receive love differently (words vs. actions)",
      "3. Use the kite metaphor for parenting balance (freedom vs. discipline)",
      "4. Name the two dual-income family pitfalls (outsourcing / tech-dependence)",
      "5. Define true filial piety beyond material support (犬马之养 as the contrast)",
      "6. Close with a classical quote on filial piety urgency",
    ],
    sentences: [
      "爱需要言语滋润，否则容易产生隔阂，发生冲突。",
      "每个人感受爱的方式不一样，有人偏好言语肯定，有人偏好实际行动，如准备礼物、花时间陪伴、提供帮助、拥抱。",
      "孩子像风筝，线握得太紧，风筝飞不高；线放得太松，风筝就会失控坠落。",
      "给予自由，是因为孩子是独立的个体；严加管教，是因为缺乏方向的自由等同放纵。",
      "双薪家庭面临的挑战，一是把教育责任外包给专业机构，二是依赖网络和 AI 代替陪伴。",
      "陪伴的质量比时间的长短更重要。",
      "真正的孝道不只是物质上的供养，更重要的是精神上的关怀与陪伴，这就是'犬马之养'的反面。",
      "羊有跪乳之恩，鸦有反哺之心，动物尚知回报，人更应懂得感恩。",
      "'树欲静而风不止，子欲养而亲不待'，孝道不能等。",
      "爱的表达方式因人而异，重要的是了解对方'爱的语言'，而非用自己的方式强加于人。",
    ],
  },

  // ============================================================
  // 中二 单元二：关爱动物
  // ============================================================
  {
    topic: "关爱动物",
    unit: "中二单元二",
    color: "#e67e22",
    desc: "人与动物关系、自然法则、新加坡城市生态定位",
    outline: [
      "1. Frame Singapore's shift from 'Garden City' to 'City in Nature'",
      "2. State the ideal human-animal relationship (coexistence, not domination)",
      "3. Use the wolf-deer effect to argue competition/pressure can be healthy",
      "4. Link to a classical idiom on adversity breeding strength",
      "5. Close on humans being part of nature, not separate from it",
    ],
    sentences: [
      "新加坡正从'花园里的城市'迈向'自然中的城市'，人们接触野生动物的机会也随之增加。",
      "人与动物应是共存、平等分享资源的关系，而非主宰与被主宰。",
      "自然法则不应被过度干预，人为干预食物链可能反而破坏生态平衡。",
      "'狼鹿效应'告诉我们，竞争对手的存在能激发危机感，反而促进物种的健康与生存能力。",
      "生于忧患，死于安乐，适度的压力反而能激发潜能。",
      "真正文明的社会，懂得为其他生命留出空间。",
      "我们应学会与野生动物共处而非排斥，因为人类本就是自然的一部分。",
    ],
  },

  // ============================================================
  // 中二 单元三：绿色生活
  // ============================================================
  {
    topic: "绿色生活",
    unit: "中二单元三",
    color: "#27ae60",
    desc: "水资源策略、减塑政策、电子垃圾、多管齐下的治理思路",
    outline: [
      "1. Open with Singapore's water scarcity as the reason behind the Four National Taps",
      "2. Explain how plastic-bag charging works as an economic lever",
      "3. Diagnose e-waste as a psychological ('always want new') rather than purely technical problem",
      "4. Explain WHY policy needs multiple simultaneous measures (多管齐下) — this line is reusable for any policy-effectiveness question",
      "5. Close with: policy guides, habit is what actually solves the problem",
    ],
    sentences: [
      "新加坡国土小、缺乏天然水资源，因此必须依靠多元化的水源策略确保供水安全。",
      "四大水喉包括进口水、收集的雨水、新生水和淡化水。",
      "政府通过让消费者为购物袋付费，从经济角度改变消费习惯，培养自带购物袋的文化。",
      "电子垃圾泛滥的主因，是人们缺乏'够用就好'的心态，不断追求新产品。",
      "政府推行政策总要多管齐下，因为单一手段效果有限，需配合教育宣传、企业责任、社区活动等多方面共同推进。",
      "未雨绸缪，是新加坡水资源政策的核心智慧。",
      "政策是引导，习惯的改变才是治本之道。",
    ],
  },

  // ============================================================
  // 中二 单元四：成长的足迹
  // ============================================================
  {
    topic: "成长的足迹",
    unit: "中二单元四",
    color: "#16a085",
    desc: "习惯的力量、内外美、择友标准、健康自信的青少年",
    outline: [
      "1. Open with the 'habit as invisible chain' metaphor",
      "2. Contrast outer beauty (fades) vs inner beauty (lasts) if asked which matters more",
      "3. Contrast 益友 vs 损友 with concrete behavioural markers",
      "4. List traits of a confident, healthy teenager (good for 'how to become...' questions)",
      "5. Close on consistency/persistence being the real source of habit's power",
    ],
    sentences: [
      "习惯就像无形的铁链，看不见，却紧紧束缚或推动着我们前行的方向。",
      "外在美能在短时间内吸引他人注意，但容易随时间褪色；内在美才能赢得长久的尊重与认可。",
      "外表是一时的印象，内涵才是长久的魅力。",
      "益友会在你犯错时坦诚指正、在你需要时真心支持；损友则只在你顺境时出现，甚至怂恿你做不当行为。",
      "真正的朋友，是那个敢在你犯错时说真话的人。",
      "健康自信的青少年充满热忱、明辨是非、适应力强、坚韧不拔，并能独立思考、善于沟通。",
      "好习惯需要长期坚持才能见效，而非一蹴而就，这正是习惯之所以有'力量'的原因。",
    ],
  },

  // ============================================================
  // 中二 单元五：心系家园
  // ============================================================
  {
    topic: "心系家园",
    unit: "中二单元五",
    color: "#2980b9",
    desc: "组屋设计创新、多元文化、公民意识",
    outline: [
      "1. Elevate HDB flats from 'mere housing' to a shared emotional landmark",
      "2. Give two concrete design examples (colour wayfinding for dementia, Kampung Admiralty)",
      "3. State the multicultural metaphor (melting pot / salad bowl, 求同存异)",
      "4. Define '心系家园' explicitly — rootedness + civic responsibility",
    ],
    sentences: [
      "组屋不只是居所，更承载着新加坡人共同的生活记忆与情感连结。",
      "组屋底层加入了'色彩寻路法'，用色彩与图案帮助失智长者辨认方向，体现设计上的人文关怀。",
      "得奖设计'海军部村庄'采用'垂直村庄'概念，将医疗、托儿和农场结合在同一建筑内，体现跨代共融。",
      "新加坡像大方的'大熔炉'，各族文化求同存异、和谐共存。",
      "真正的多元文化，不是消灭差异，而是学会在差异中和谐共处。",
      "心系祖国，就是扎根新加坡，具有强烈的公民意识，对家庭、社区、国家负责。",
    ],
  },

  // ============================================================
  // 中二 单元六：与世界相连
  // ============================================================
  {
    topic: "与世界相连",
    unit: "中二单元六",
    color: "#7f8c8d",
    desc: "假信息、媒体素养、双语优势",
    outline: [
      "1. Name the problem: misinformation spreads faster than truth",
      "2. State the harm (erodes trust) then the solution (media literacy) in one breath",
      "3. Pivot to bilingualism as Singapore's unique advantage / bridge metaphor",
      "4. Close with a personal-responsibility action line (verify before sharing)",
    ],
    sentences: [
      "在信息爆炸的时代，假信息的传播速度往往比真相更快，这是我们必须正视的问题。",
      "假信息会破坏人与人之间的信任，引发不必要的恐慌或冲突，因此提高媒体素养至关重要。",
      "学习双语能够让我们兼收并蓄、互为养分，也可以成为东西方世界之间的桥梁。",
      "在信息爆炸的时代，核实比转发更重要。",
      "面对真假难辨的信息，每个网民都该养成'先核实、再转发'的习惯，这是数字时代最基本的公民素养。",
    ],
  },

  // ============================================================
  // 健康：饮食
  // ============================================================
  {
    topic: "健康：饮食",
    unit: "健康",
    color: "#d35400",
    desc: "Nutri-Grade、青少年不良饮食习惯、慢性病年轻化",
    outline: [
      "1. Open with the rising trend of youth obesity / chronic disease",
      "2. [If 看图说话] describe the vending-machine scene before pivoting to the issue",
      "3. Explain WHY teens prefer junk food (dopamine, social media trend, convenience)",
      "4. Critically evaluate Nutri-Grade: useful but limited — labels alone don't fix behaviour",
      "5. Give the 3-party solution framework (policy + school + family)",
      "6. Close by echoing the '身体是革命的本钱' opening line",
    ],
    sentences: [
      "近年来，新加坡青少年的肥胖率和慢性疾病年轻化问题，已引起社会广泛关注。",
      "画面中，一名学生站在自动贩卖机前犹豫不决，最终选择了一款标有红色 D 级标签的高糖饮料并大口喝下。",
      "这个画面反映了，即使有 Nutri-Grade 标签警示，青少年仍可能因口感偏好而忽略健康警示。",
      "青少年偏爱快餐高糖食物，原因不外乎感官刺激带来的满足感，以及社交媒体宣传下形成的'流行文化'。",
      "'身体是革命的本钱'，如果没有了健康的体魄，再优秀的学业成绩也失去了意义。",
      "暴饮暴食的习惯若不及时纠正，等到'三高'缠身才后悔就太迟了，凡事都该防患于未然，这正是'病从口入'的道理。",
      "Nutri-Grade 标签的局限在于，它只是'提醒'，若青少年缺乏自律，效果依然有限。",
      "解决饮食问题需要政府、学校、家庭多管齐下：标签分级、健康餐食计划、家庭熏陶三者缺一不可。",
      "健康的饮食习惯不是一朝一夕就能养成的，它需要政府的政策引导，更需要个人的自律与坚持。",
      "健康的体魄是一切成就的基础，失去了它，再多的成绩都失去意义。",
    ],
  },

  // ============================================================
  // 健康：心理
  // ============================================================
  {
    topic: "健康：心理",
    unit: "健康",
    color: "#8e44ad",
    desc: "求助意识、草莓族、心理韧性、唯分数论",
    outline: [
      "1. Open with the headline statistic (1 in 3 teens show anxiety/depression symptoms)",
      "2. [If 看图说话] describe the failed-exam scene, then pivot to 唯分数论",
      "3. Explain why students don't seek help (标签化, 爱面子)",
      "4. Define 唯分数论's harm, then '草莓族' as the resilience-deficit phenomenon",
      "5. Flip to the positive: 鲶鱼效应 — some pressure is actually good",
      "6. Close with the de-stigmatising 'mental cold' analogy",
    ],
    sentences: [
      "近年来，青少年的心理健康已成为教育部和社会极度关注的焦点。",
      "研究显示，每三名10至18岁的青少年中，就有一人出现明显的忧郁和焦虑症状。",
      "画面中，一名学生看着一张不及格的成绩单，双手捂脸，神情沮丧甚至落泪。",
      "这个画面让我联想到'唯分数论'对青少年自我价值感的负面影响。",
      "很多学生不愿求助，主要是害怕被'标签化'，以及青春期强烈的'爱面子'心理，这种讳疾忌医的做法只会让负面情绪不断积压。",
      "'唯分数论'让学生把自我价值与考试分数画上等号，一旦遭遇挫折，就容易产生极度的自我怀疑。",
      "分数只是学习过程的一个片段，不该成为衡量一个人价值的唯一标准。",
      "这一代青少年有时被称为'草莓族'，外表光鲜却一碰就碎，面对批评或失败往往不知所措，容易一蹶不振。",
      "挫折不是人生的绊脚石，而是成长的垫脚石，只有培养强大的心理韧性，我们才能在未来的风雨中屹立不倒。",
      "适当的生存压力反而能激发求生欲望与潜能，这就是'鲶鱼效应'给我们的启示；压力犹如一把尖刀，它可以为我们所用，也可以把我们割伤。",
      "倾诉不是软弱的表现，而是勇敢求助的第一步。",
      "心理健康和身体健康同样重要，'心理感冒了去寻求帮助，和身体生病了看医生一样正常'。",
    ],
  },

  // ============================================================
  // 健康：数字
  // ============================================================
  {
    topic: "健康：数字",
    unit: "健康",
    color: "#2c3e50",
    desc: "智能手机双刃剑、容貌焦虑、FOMO、网络霸凌",
    outline: [
      "1. Open with the rise of '低头族' as a social phenomenon",
      "2. [If 看图说话] describe the silent-family-at-dinner scene, pivot using the 'physical distance vs heart distance' line",
      "3. Cover physical harm (eyesight, sleep) then psychological harm (容貌焦虑, FOMO, addiction)",
      "4. Push back on the premise if the question says phones are the 'culprit' — tools are neutral, self-discipline is the real variable",
      "5. Close with the 3-party solution (self / family / school Cyber Wellness)",
    ],
    sentences: [
      "随着智能手机的普及，'低头族'现象在新加坡社会越来越普遍，引发了关于科技利弊的讨论。",
      "画面中，一家人围坐在小贩中心的餐桌前，但每个人都低着头专注地看着自己的手机，彼此之间没有眼神交流。",
      "这反映了'低头族'现象如何侵蚀现实中的家庭互动，科技拉近了物理距离，却推远了心与心的距离。",
      "长时间紧盯屏幕会导致视力下降、颈椎问题，睡前蓝光也会严重影响睡眠质量。",
      "社交媒体的'滤镜'效应容易引发'容貌焦虑'和'FOMO'，导致青少年盲目攀比、产生自卑情绪，甚至沉迷其中无法自拔。",
      "我不完全同意'智能手机是罪魁祸首'这个说法，因为手机本身是中立的工具，关键在于使用者是否具备自律和判断力。",
      "水能载舟，亦能覆舟，科技本身没有善恶之分，关键在于使用者是否具备足够的自律和判断力。",
      "唯有个人自律、家庭以身作则、学校推行网络健康教育三方配合，才能真正发挥科技的正面价值。",
    ],
  },

  // ============================================================
  // 健康：公共卫生
  // ============================================================
  {
    topic: "健康：公共卫生",
    unit: "健康",
    color: "#c0392b",
    desc: "电子烟、人口老龄化、活跃乐龄、公德心",
    outline: [
      "1. Open with the vaping-despite-ban paradox, OR the super-aged-society framing — pick based on question",
      "2. [If 看图说话] describe either the void-deck vaping scene or the active-ageing-centre scene",
      "3. Explain WHY vaping persists (disguised as stationery, false 'harmless' online claims)",
      "4. Explain the cost of isolation for elderly vs benefit of staying active",
      "5. Make the 'law doesn't mandate ≠ morality doesn't require' argument for civic-mindedness questions",
      "6. Close with the relevant classical quote depending on sub-topic",
    ],
    sentences: [
      "尽管新加坡法律严禁电子烟，但青少年吸电子烟的现象却呈上升趋势，值得我们深入探讨。",
      "画面中，几名学生聚集在组屋底层的角落，神色紧张地互相传递着一个外形新潮的电子烟器具。",
      "电子烟常被伪装成玩具或文具，加上网络虚假宣传其'无害'，导致在青少年群体中暗流涌动。",
      "拒绝盲目跟风，是保护自己最基本的智慧；唯有家庭扮演好'守门人'角色，加上执法部门加大打击力度，才能真正遏制这一趋势。",
      "新加坡正快速迈入超老龄化社会，如何让年长者'老有所乐、老有所依'是重大的社会课题。",
      "画面中，几位年长者正在活跃乐龄中心里下棋、做运动，旁边有年轻义工陪伴聊天，气氛融洽。",
      "年长者若长期孤立缺乏社交运动，会加速患上失智症，加重医疗系统负担；反之保持活跃能让他们活得更有尊严。",
      "'老吾老以及人之老'，关爱今天的老人，其实就是关爱明天的自己。",
      "法律不强制，不代表道德不要求；在没有法规约束的'新常态'下，公德心更显得重要。",
    ],
  },

  // ============================================================
  // 健康：政府措施速记
  // ============================================================
  {
    topic: "健康：政府措施速记",
    unit: "健康",
    color: "#95a651",
    desc: "可直接套入答案的机构名称、热线、计划名称（增加答案可信度）",
    outline: [
      "Memorise these as concrete proof-points to drop into any health answer — naming specifics makes you sound prepared",
    ],
    sentences: [
      "政府推出了 Healthier SG 计划，鼓励国人固定看同一名全科医生，做定期体检。",
      "新加坡援人协会（SOS）提供 24 小时情绪支持热线 1767，心理卫生学院（IMH）则提供专业的心理评估与治疗。",
      "飞跃社区服务（Fei Yue）和关怀机构（Care Corner）设有专门的青少年辅导热线，提供心理疏导与家庭支持。",
      "ActiveSG 计划和全国健步大挑战鼓励国人保持运动习惯。",
    ],
  },

  // ============================================================
  // 中一 单元一：友情与责任
  // ============================================================
  {
    topic: "友情与责任",
    unit: "中一单元一",
    color: "#1abc9c",
    desc: "公共卫生责任、网络公审、防骗、基层尊重、车厢礼仪",
    outline: [
      "1. Open with whichever sub-scenario the question targets (parcel waste / mask-wearing / doxing / scam-protection / labour respect / headphone etiquette)",
      "2. Rebut the 'it's just my private business' framing — personal convenience has public costs",
      "3. Use the 'law doesn't mandate ≠ morality doesn't require' line for any post-pandemic civic question",
      "4. For digital-era questions: position youth as '数字时代原住民' with a duty to protect elders",
      "5. Close with the universal boundary line: personal freedom stops where others' peace begins",
    ],
    sentences: [
      "随着网购的普及，快递包装堵塞组屋垃圾槽的现象越来越普遍，这引发了关于'私人行为'与'公共责任'边界的讨论。",
      "处理网购垃圾不是单纯的私人问题，因为个人贪图方便的行为，会引发整个社区的公共卫生危机；私人的方便，不能以牺牲公共空间的安全为代价。",
      "法律不强制，不代表道德不要求；生病时戴口罩，依然是我们对他人健康应尽的基本责任。",
      "优雅的社会不应只靠法律约束，更需要发自内心的修养。",
      "'人肉搜索'即使打着'网络自警'的旗号，本质上仍是擅自执法的'复仇'行为，普通网民没有这个权力。",
      "举起手机拍摄陌生人之前，先想一想是否跨越了对他人最基本的尊重。",
      "新加坡诈骗案屡创新高，许多乐龄人士因不熟悉科技而蒙受损失，防堵诈骗不能只靠警察，更需要全社会守望相助。",
      "年轻人作为'数字时代原住民'，该将'独善其身'转化为'兼济天下'，主动教导长辈辨识诈骗手法。",
      "善待服务人员不仅是个人修养的体现，更是我们对维持社会运转的劳动者应尽的责任；职业不分贵贱。",
      "当个人享受娱乐的自由与他人渴望安静的权利发生冲突时，戴耳机就是最基本的同理心体现。",
      "公共空间的自由，止于他人安宁的边界，这正是现代公民最基本的素养。",
    ],
  },

  // ============================================================
  // 中一 单元二：团圆与传统节日
  // ============================================================
  {
    topic: "团圆与传统节日",
    unit: "中一单元二",
    color: "#e74c3c",
    desc: "实体红包vs电子红包、外包式过节、节庆文化速记",
    outline: [
      "1. Open with the dual-income-family trend of outsourcing reunion dinners",
      "2. For red-packet questions: contrast the convenience of e-Angbao vs the warmth of in-person ritual",
      "3. Argue why '全家总动员' (shared labour) is itself the bonding mechanism, not just the meal",
      "4. Flip to the positive case: short-video sharing can pull grandparent-grandchild bonds closer, not just erode them",
      "5. Close on the compromise: simplify form, but keep at least one shared-participation ritual",
      "6. [Optional festival facts] drop specific festival meanings if the question needs cultural breadth",
    ],
    sentences: [
      "随着双薪家庭增多，越来越多人选择在餐馆吃团圆饭，这引发了关于传统节日是否正在失去亲情凝聚力的讨论。",
      "实体红包的价值在于晚辈向长辈面对面敬茶、拜年并接受祝福，这种亲情温度是电子方式难以取代的。",
      "科技可以传递红包，却传递不了那双手递过来时的温度。",
      "传统节日需要'全家总动员'，一起包饺子、挂灯笼，这些'身体力行'的共同劳动本身就是亲情凝聚的纽带。",
      "节日的意义不在于吃了什么，而在于一起做了什么。",
      "科技不是传统文化的对立面，拍摄短视频记录祖父母制作传统节日食品，反而能让'隔代亲'被重新拉近。",
      "形式可以简化，但应保留至少一项'共同参与'的环节，才不会让节日失去原本的意义。",
      "屠妖节象征'邪不胜正'，光明战胜黑暗；丰收节烹煮甜粥，溢出的粥象征富足与新气象。",
    ],
  },

  // ============================================================
  // 中一 单元三：相约狮城
  // ============================================================
  {
    topic: "相约狮城",
    unit: "中一单元三",
    color: "#3498db",
    desc: "历史建筑活化、人工自然vs真实自然、艺术门槛",
    outline: [
      "1. Open by naming Singapore's shift from 'Garden City' to 'City in Nature'",
      "2. For heritage-building questions: argue adaptive reuse (e.g. National Gallery) is 'activation' not 'freezing'",
      "3. For artificial-nature questions: concede the value of engineered greenery, but argue real nature reserves must still be preserved",
      "4. For art-accessibility questions: locate the 'barrier' as psychological, not literal",
      "5. Close with a punchy, quotable one-liner matched to the sub-topic",
    ],
    sentences: [
      "新加坡正从'花园城市'转向'在大自然里的城市'，这种高度人工干预的'完美规划'引发了不少讨论。",
      "国家美术馆由前最高法院和政府大厦改建而成，既保留历史记忆，又赋予建筑新的文化功能，是'活化'而非'冻结'历史。",
      "保留历史不等于让建筑沉睡，赋予新生命才是真正的传承。",
      "人工绿化是城市化的必要妥协，但应同步保留真正的自然保护区，作为'真实接触'大自然的渠道。",
      "人工的自然或许完美，但真正的野性，永远无法被完全设计出来。",
      "艺术的'门槛'很多时候是心理上的，而非实际门票或内容的门槛，亲身体验往往比想象中更容易理解。",
      "艺术的门槛，往往不在美术馆的门口，而在我们自己心里。",
    ],
  },

  // ============================================================
  // 中一 单元四：习惯的力量
  // ============================================================
  {
    topic: "习惯的力量",
    unit: "中一单元四",
    color: "#f39c12",
    desc: "深度阅读、成长型思维、旧习惯的负担、环保电子产品习惯",
    outline: [
      "1. Open with the fragmented-information trend (short-video habits crowding out reading)",
      "2. Explain the cost: attention span and depth of thought decline",
      "3. Contrast 唯分数论 (fixed mindset) with 成长型思维 (growth mindset)",
      "4. For 'are old habits a burden' questions: separate 'method-level' habits (should adapt) from 'character-level' habits (should persist)",
      "5. Close with the reading-specific punchline",
    ],
    sentences: [
      "在碎片化信息时代，青少年越来越习惯短视频，越来越少阅读长篇文章或实体书。",
      "习惯了碎片化信息，专注力和深度思考能力会逐渐退化，语言表达能力也随之下降。",
      "短视频给我们信息，但只有深度阅读能给我们思考的能力。",
      "'唯分数论'让学生把自我价值等同于考试分数；'成长型思维'则把挫折看作学习与进步的机会。",
      "失败不是终点，而是发现问题、调整方向的起点。",
      "过去有效的方法在 AI 时代可能已经过时，固守旧习惯会让人思想僵化、无法适应职场快速变化。",
      "要分清'方法层面'的习惯（应灵活调整）与'品格层面'的习惯（应长期坚持），不能一概而论。",
    ],
  },

  // ============================================================
  // 中一 单元五：创新与改变
  // ============================================================
  {
    topic: "创新与改变",
    unit: "中一单元五",
    color: "#9b59b6",
    desc: "创新精神培养、AI与人类创造力、传统与创新的关系",
    outline: [
      "1. Open by reframing innovation as observation-driven, not genius-driven",
      "2. Give a concrete architecture example tying form to function (zero-energy design)",
      "3. For AI-creativity questions: argue AI remixes existing data but lacks lived emotional experience",
      "4. For tradition-vs-innovation questions: argue old elements recombined IS innovation, not its opposite",
      "5. Close with the balanced verdict: AI is a tool that amplifies, not replaces, human meaning-making",
    ],
    sentences: [
      "创新往往不是凌空出现的灵感，而是对日常生活细致观察后的灵光一闪。",
      "创新不只是外形新奇，更在于解决实际问题，比如用太阳能与雨水收集实现'零能耗'空中花园。",
      "AI 的'创新'本质是基于已有数据的重组与模仿，缺乏真正的情感体验和原创的'为什么'。",
      "AI 能模仿创意的形式，却模仿不了创意背后的生命体验。",
      "许多创新本质是'旧元素的新组合'，证明传统可以是创新的素材，而非阻碍。",
      "创新不是对传统的背叛，而是让传统以新的方式延续生命力。",
      "AI 是工具，能放大人类创造力，但'赋予意义'和'情感连结'的能力仍是人类独有。",
    ],
  },

  // ============================================================
  // 中一 单元六：小人物大贡献
  // ============================================================
  {
    topic: "小人物大贡献",
    unit: "中一单元六",
    color: "#34495e",
    desc: "无名英雄、基层劳动者、曾喆、媒体报道",
    outline: [
      "1. Open by naming the unseen labour that keeps the city running",
      "2. Give 2-3 concrete job examples for texture (MRT maintenance crew, delivery riders, migrant workers)",
      "3. Use the 911/曾喆 story as proof that greatness doesn't require status",
      "4. For media-coverage questions: argue reporting AND policy protection must work together, not one instead of the other",
      "5. Close on persistence over spectacle",
    ],
    sentences: [
      "我们的社会里有许多默默付出的'无名英雄'，他们的劳动维持着城市的日常运转。",
      "深夜清洗隧道的地铁维修人员、早出晚归的送餐员、默默坚守岗位的客工，他们的贡献值得被肯定。",
      "平凡的岗位，也能孕育不平凡的伟大。",
      "曾喆原本只是一名普通的保险公司职员，却在911事件中协助他人逃生，最终牺牲，伟大不一定需要特殊的身份或地位。",
      "媒体报道和政策保障应该并行，报道唤起公众意识，政策落实长期保障，二者缺一不可。",
      "贡献的大小不重要，重要的是持续的、真诚的参与，而非'打卡式'的一次性行善。",
      "小人物的大贡献，往往体现在日复一日的坚持，而非一时的轰动。",
    ],
  },

  // ============================================================
  // 通用万能句
  // ============================================================
  {
    topic: "通用万能句",
    unit: "跨主题",
    color: "#7f8c8d",
    desc: "不限主题、随时可用的开头/连接/表态/结尾模板，替换关键词即可套用任何题目",
    outline: [
      "Use these as connective scaffolding around topic-specific content — they make any answer sound structured regardless of subject matter",
    ],
    sentences: [
      "有人认为...，也有人认为...，对此我的看法是...",
      "近年来，...已成为社会极度关注的焦点。",
      "首先...；其次...；最后...",
      "然而，凡事都有两面性，...也带来了一些不可忽视的问题。",
      "这不仅是...的问题，更是...的问题。",
      "换个角度看，...其实也可以被视为...",
      "我完全同意这个说法，因为...",
      "我只能部分同意这个说法，因为虽然...，但...",
      "在...的前提下，我同意...；但如果...，情况就不一样了。",
      "总而言之，...需要个人、家庭、学校多方共同努力，才能真正...",
      "归根究底，...的关键不在于...，而在于...",
      "这也提醒着我们，作为新加坡社会的一员，应该...",
    ],
  },
];
