
import React from "react";
import feature1 from "../assets/feature1.webp";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.png";
import { useParams, Link } from "react-router-dom";

// Translation object for BlogDetail page
const translations = {
  en: [
    {
      title: "Fresh & Quality Ingredients",
      intro:
        "Every dish we prepare starts with the finest, handpicked ingredients. We believe that freshness is the secret to authentic taste, which is why we source daily and prioritize quality over everything else.",
      sections: [
        {
          heading: "Farm to Table",
          content:
            "We partner with trusted farmers and suppliers to bring you seasonal produce that ensures both freshness and sustainability. Each vegetable, fruit, and herb is carefully chosen to enhance the flavor of our dishes. By sourcing directly from farms, we minimize middlemen, ensuring higher quality and fairer prices. This farm-to-table philosophy helps us support local communities while delivering nutritious food. You can truly taste the difference when your meals are made from fresh, locally grown ingredients. It’s our way of bringing the best of nature straight to your plate."
        },
        {
          heading: "Meats & Seafood",
          content:
            "Our meats are sourced from responsible farms, ensuring tenderness, quality, and ethical practices. Fresh seafood is delivered daily, bringing authentic coastal flavors to your plate. We strictly avoid frozen or chemically treated options, so you enjoy natural flavors and rich nutrition. Every cut of meat is inspected and prepared to maintain juiciness and taste. Our seafood selections undergo rigorous checks to ensure safety and freshness. When you dine with us, you can trust that every bite of protein is wholesome, flavorful, and responsibly sourced."
        },
        {
          heading: "Healthy Choices",
          content:
            "We balance taste with nutrition, so every meal nourishes your body without compromising on flavor. From gluten-free to low-carb options, our menu caters to a variety of dietary needs. Our chefs work with nutritionists to design meals that are wholesome and energizing. We also reduce excess oil, sodium, and sugar in our recipes without losing authentic taste. You’ll always find a range of healthy alternatives on our menu, perfect for everyday dining. Eating well has never been this satisfying or delicious."
        },
        {
          heading: "Spices & Herbs",
          content:
            "A blend of authentic spices and fresh herbs creates the soul of our food. From aromatic basil to fiery chili, every flavor note is intentional and balanced. We grind many of our spices in-house to preserve their natural oils and freshness. Herbs are picked daily to enhance both taste and aroma. Our chefs experiment with spice blends to give each dish a unique yet authentic character. The result is a flavor experience that excites your senses and keeps you coming back for more."
        },
        {
          heading: "Chef’s Selection",
          content:
            "Our chefs carefully curate each recipe, ensuring authenticity while adding a signature twist. They combine years of culinary expertise with modern techniques to surprise your taste buds. Signature sauces, marinades, and toppings are designed to elevate traditional recipes. Every dish goes through multiple tastings before it reaches your plate. Seasonal specials are added regularly to keep the menu exciting and dynamic. This thoughtful process guarantees that every meal is crafted with passion and perfection."
        },
        {
          heading: "Customer Favorites",
          content:
            "Signature dishes crafted with these premium ingredients have become favorites among our regulars, proving that quality speaks for itself. Many of our recipes are inspired by customer feedback and tailored to suit popular tastes. Dishes like our signature biryani, grilled platters, and fresh salads remain bestsellers year-round. We also introduce limited-time offers based on trending flavors to keep things fresh. Each favorite dish is refined continuously to maintain its reputation. When customers return for the same meal again and again, we know we’re doing it right."
        },
        {
          heading: "Our Promise",
          content:
            "We guarantee meals made with love, care, and only the best ingredients—because you deserve nothing less. Our sourcing and cooking processes are transparent, so you can trust what goes into your food. We constantly evaluate our quality standards to meet and exceed customer expectations. Hygiene and safety are always prioritized, from the kitchen to your delivery bag. Every order is a reflection of our commitment to excellence. With us, you don’t just get food—you get a promise of freshness, taste, and trust."
        },
      ],
    },
    {
      title: "Fast & Reliable Delivery",
      intro:
        "We know you’re hungry, and we value your time. Our delivery system ensures your order reaches you hot, fresh, and on time—every time.",
      sections: [
        {
          heading: "Smart Tracking",
          content:
            "You’ll always know where your food is, thanks to our real-time delivery tracking system. The moment your order is placed, you can follow its preparation, dispatch, and arrival. Our app provides live updates so you’re never left wondering. Tracking also helps you plan your time better, whether it’s for a lunch break or family dinner. Transparency builds trust, and we make sure you’re informed every step of the way. It’s delivery made smarter, just for you."
        },
        {
          heading: "Hot & Fresh Guarantee",
          content:
            "Orders are packed in insulated containers, ensuring meals arrive just as if they were served in our restaurant. Heat retention technology keeps food warm without compromising its taste or texture. Cold dishes like salads and desserts are packed separately to maintain freshness. We also monitor packaging standards regularly to ensure consistency. This guarantee is our way of showing that we respect your dining experience. When you open the box, it should feel like you’re sitting at our table."
        },
        {
          heading: "Wider Reach",
          content:
            "Our delivery partners cover more locations than ever before, making it easier for you to enjoy your favorite meals. Whether you live in the heart of the city or on the outskirts, we strive to deliver wherever you are. We continue expanding our network so no one misses out. With strategic delivery hubs, your food doesn’t travel far, ensuring freshness. This extended reach makes us one of the most reliable services around. Wherever you are, we bring happiness to your doorstep."
        },
        {
          heading: "Lightning Speed",
          content:
            "On average, orders are delivered in under 30 minutes—perfect for quick lunches or family dinners. Our system optimizes routes using smart algorithms, reducing delivery time. We also train our partners to ensure safe yet efficient travel. Emergencies like traffic delays are communicated instantly through updates. This speed doesn’t mean compromising on safety or quality. We simply know that when hunger strikes, time matters most."
        },
        {
          heading: "Safe & Hygienic",
          content:
            "All our deliveries follow strict hygiene protocols to keep you safe and worry-free. Our staff undergoes regular health checks and safety training. Food is sealed in tamper-proof packaging to avoid contamination. Delivery bags are sanitized multiple times a day for extra safety. We also maintain contactless delivery options for your peace of mind. With us, cleanliness is not an option—it’s a guarantee."
        },
        {
          heading: "Flexible Scheduling",
          content:
            "Plan ahead by scheduling your delivery for later in the day or even the next day. Our system allows you to choose the time that works best for you. This is ideal for busy professionals, family gatherings, or planned events. You won’t have to worry about last-minute hassles. Even pre-orders get the same attention to quality and freshness. We make sure your meal is ready exactly when you want it."
        },
        {
          heading: "Customer Support",
          content:
            "Our 24/7 support ensures that if anything goes wrong, we fix it immediately. Whether it’s a missing item, late delivery, or technical issue, help is just a call away. Our team is trained to resolve queries quickly and politely. Feedback is taken seriously and used to improve our service. We believe customer care is just as important as the food itself. With round-the-clock support, you’ll always feel valued and heard."
        },
      ],
    },
    {
      title: "Wide Variety of Cuisines",
      intro:
        "Why stick to one flavor when you can explore them all? From local favorites to global delicacies, we serve a menu that satisfies every craving.",
      sections: [
        {
          heading: "Local Favorites",
          content:
            "We celebrate traditional recipes that remind you of home while keeping them fresh and exciting. From classic curries to regional snacks, we honor culinary traditions. Our chefs research authentic cooking methods to maintain cultural accuracy. Local dishes are also adapted slightly for modern tastes, keeping them balanced. This way, every bite feels nostalgic yet refreshing. We bring the warmth of home cooking to your dining table."
        },
        {
          heading: "Global Delicacies",
          content:
            "From Italian pasta to Asian stir-fry, our chefs bring authentic international flavors to your table. Each recipe is studied carefully to preserve its cultural roots. Ingredients are imported or locally sourced to match global standards. Our goal is to give you the joy of traveling through food. These dishes let you explore the world without leaving your seat. Every meal is a passport to a new culinary adventure."
        },
        {
          heading: "Fusion Specials",
          content:
            "Our kitchen experiments with bold combinations, creating unique dishes that you won’t find elsewhere. Fusion allows us to mix the best of different cuisines into one plate. Chefs balance flavors creatively to surprise your taste buds. Signature fusion dishes are often limited-time specials, keeping things exciting. Customers love the thrill of trying something new and unexpected. Innovation is at the heart of our menu, and fusion is where it shines."
        },
        {
          heading: "Vegetarian Options",
          content:
            "A wide selection of vegetarian and vegan meals ensures that everyone finds something they love. We use plant-based proteins and fresh produce to create hearty meals. Each dish is designed to be as flavorful and satisfying as its non-veg counterpart. We also experiment with new vegetarian recipes inspired by global cuisines. Vegan desserts and dairy-free options add even more variety. With us, vegetarian dining is never boring—it’s a celebration."
        },
        {
          heading: "Seasonal Menus",
          content:
            "We introduce limited-time seasonal dishes, so there’s always something new to try. Seasonal produce is used at its peak freshness, ensuring better flavor. These menus celebrate local festivals, holidays, and changing weather. From summer coolers to winter warm meals, there’s always variety. Seasonal items also allow our chefs to experiment with creative recipes. Each season brings a fresh twist to your dining experience."
        },
        {
          heading: "Family Meals",
          content:
            "Big portions and family-style platters make dining together easier and more joyful. Sharing meals is part of our food philosophy, bringing people closer. Family combos are curated to suit different tastes at the table. We also offer kid-friendly dishes so no one feels left out. Whether it’s a celebration or a casual dinner, family meals fit every occasion. Food tastes better when enjoyed together, and we make sure of it."
        },
        {
          heading: "Something for Everyone",
          content:
            "Whether it’s a late-night snack, a healthy breakfast, or a festive dinner, our variety has you covered. The menu is designed to cater to every age group and lifestyle. From light bites to indulgent feasts, there’s no shortage of choices. We keep expanding the menu to match evolving customer preferences. Every dish is freshly prepared, regardless of size or time. With us, you’ll never run out of delicious options."
        },
      ],
    },
  ],
  ar: [
    {
      title: "مكونات طازجة وعالية الجودة",
      intro: "كل طبق نعده يبدأ بأجود المكونات المختارة يدويًا. نؤمن أن الطزاجة هي سر الطعم الأصيل، ولهذا نحرص على التوريد اليومي ونفضل الجودة فوق كل شيء.",
      sections: [
        { heading: "من المزرعة إلى المائدة", content: "نتعاون مع مزارعين وموردين موثوقين لتقديم منتجات موسمية تضمن الطزاجة والاستدامة. كل خضار وفاكهة وعشبة مختارة بعناية لتعزيز نكهة أطباقنا. من خلال التوريد المباشر من المزارع، نقلل الوسطاء ونضمن جودة أعلى وأسعار عادلة. هذه الفلسفة تدعم المجتمعات المحلية وتقدم طعامًا مغذيًا. ستشعر حقًا بالفرق عندما تتذوق وجبات طازجة من مكونات محلية. إنها طريقتنا في تقديم أفضل ما في الطبيعة مباشرة إلى طبقك." },
        { heading: "اللحوم والمأكولات البحرية", content: "لحومنا من مزارع مسؤولة لضمان الطراوة والجودة والممارسات الأخلاقية. المأكولات البحرية الطازجة تصل يوميًا لتقديم نكهات ساحلية أصيلة. نبتعد عن الخيارات المجمدة أو المعالجة كيميائيًا لتستمتع بالنكهات الطبيعية والقيمة الغذائية. كل قطعة لحم تفحص وتجهز للحفاظ على العصارة والطعم. اختياراتنا البحرية تمر بفحوصات دقيقة لضمان السلامة والطزاجة. عندما تتناول الطعام لدينا، يمكنك الوثوق بأن كل قطعة بروتين صحية ولذيذة ومن مصادر مسؤولة." },
        { heading: "خيارات صحية", content: "نوازن بين الطعم والتغذية، فكل وجبة تغذي جسمك دون التضحية بالنكهة. من الخيارات الخالية من الغلوتين إلى قليلة الكربوهيدرات، قائمتنا تلبي احتياجات متنوعة. يعمل طهاتنا مع خبراء تغذية لتصميم وجبات صحية ومغذية. نقلل من الزيوت الزائدة والصوديوم والسكر دون فقدان الطعم الأصيل. ستجد دائمًا بدائل صحية في قائمتنا، مثالية لتناول الطعام اليومي. تناول الطعام الصحي لم يكن يومًا بهذه اللذة والرضا." },
        { heading: "التوابل والأعشاب", content: "مزيج من التوابل الأصلية والأعشاب الطازجة يصنع روح طعامنا. من الريحان العطري إلى الفلفل الحار، كل نكهة متوازنة بعناية. نطحن العديد من التوابل في مطبخنا للحفاظ على زيوتها الطبيعية وطزاجتها. الأعشاب تقطف يوميًا لتعزيز الطعم والرائحة. يبتكر طهاتنا خلطات توابل فريدة لكل طبق ليمنح كل وجبة طابعًا خاصًا وأصيلاً. النتيجة تجربة نكهة تثير الحواس وتجعلك ترغب في المزيد." },
        { heading: "اختيارات الشيف", content: "يختار الشيف كل وصفة بعناية لضمان الأصالة مع لمسة خاصة. يجمعون بين خبرة سنوات وتقنيات حديثة لإبهار حاسة التذوق لديك. الصلصات والتتبيلات والتغطيات مصممة لرفع مستوى الوصفات التقليدية. كل طبق يمر بعدة تجارب تذوق قبل تقديمه. تضاف أطباق موسمية بانتظام لإبقاء القائمة متجددة وديناميكية. هذه العملية تضمن أن كل وجبة معدة بشغف وكمال." },
        { heading: "أطباق العملاء المفضلة", content: "الأطباق المميزة المصنوعة من هذه المكونات أصبحت مفضلة لدى زبائننا، ما يثبت أن الجودة تتحدث عن نفسها. العديد من وصفاتنا مستوحاة من آراء العملاء ومصممة لتناسب الأذواق الشائعة. أطباق مثل البرياني المميز، المشاوي، والسلطات الطازجة تظل الأكثر مبيعًا طوال العام. نقدم أيضًا عروضًا محدودة بناءً على النكهات الرائجة لإبقاء الأمور متجددة. كل طبق مفضل يتم تحسينه باستمرار للحفاظ على سمعته. عندما يعود العملاء لنفس الطبق مرارًا وتكرارًا، نعلم أننا على الطريق الصحيح." },
        { heading: "وعدنا", content: "نضمن وجبات معدة بحب وعناية وبأفضل المكونات—لأنك تستحق الأفضل. عمليات التوريد والطهي لدينا شفافة، ويمكنك الوثوق بما يدخل في طعامك. نقيم معايير الجودة باستمرار لتلبية وتجاوز توقعات العملاء. النظافة والسلامة دائمًا أولوية، من المطبخ إلى حقيبة التوصيل. كل طلب يعكس التزامنا بالتميز. معنا، لا تحصل فقط على طعام—بل على وعد بالطزاجة والطعم والثقة." },
      ],
    },
    {
      title: "توصيل سريع وموثوق",
      intro: "نحن نعلم أنك جائع ونقدر وقتك. نظام التوصيل لدينا يضمن وصول طلبك ساخنًا وطازجًا وفي الوقت المحدد—كل مرة.",
      sections: [
        { heading: "تتبع ذكي", content: "ستعرف دائمًا مكان طعامك بفضل نظام التتبع الفوري. بمجرد تقديم الطلب، يمكنك متابعة التحضير والإرسال والوصول. التطبيق يوفر تحديثات مباشرة حتى لا تبقى في حيرة. التتبع يساعدك أيضًا في تنظيم وقتك سواء لغداء سريع أو عشاء عائلي. الشفافية تبني الثقة، ونحن نحرص على إبقائك على اطلاع في كل خطوة. إنها خدمة توصيل أذكى خصيصًا لك." },
        { heading: "ضمان السخونة والطزاجة", content: "الطلبات تعبأ في حاويات عازلة للحرارة لضمان وصولها كما لو كانت مقدمة في المطعم. تقنية الحفاظ على الحرارة تبقي الطعام دافئًا دون التأثير على الطعم أو القوام. الأطباق الباردة مثل السلطات والحلويات تعبأ بشكل منفصل للحفاظ على الطزاجة. نراقب معايير التعبئة باستمرار لضمان الجودة. هذا الضمان يعكس احترامنا لتجربتك. عندما تفتح الصندوق، يجب أن تشعر وكأنك تجلس على طاولتنا." },
        { heading: "تغطية أوسع", content: "شركاء التوصيل لدينا يغطون المزيد من المواقع أكثر من أي وقت مضى، مما يسهل عليك الاستمتاع بوجباتك المفضلة أينما كنت. سواء كنت في قلب المدينة أو في الأطراف، نسعى لتوصيل الطعام إليك. نواصل توسيع شبكتنا حتى لا يُحرم أحد. مع مراكز توزيع استراتيجية، لا يقطع طعامك مسافة طويلة، مما يضمن الطزاجة. هذا الانتشار يجعلنا من أكثر الخدمات موثوقية. أينما كنت، السعادة تصل إلى بابك." },
        { heading: "سرعة البرق", content: "في المتوسط، يتم التوصيل خلال أقل من 30 دقيقة—مثالي للغداء السريع أو العشاء العائلي. نظامنا يختار أسرع الطرق باستخدام خوارزميات ذكية لتقليل وقت التوصيل. ندرب شركاءنا على التوصيل الآمن والسريع. أي طارئ مثل الزحام يتم إبلاغك به فورًا عبر التحديثات. هذه السرعة لا تعني التضحية بالجودة أو السلامة. نحن فقط نعلم أن الوقت مهم عندما تشعر بالجوع." },
        { heading: "آمن ونظيف", content: "كل عمليات التوصيل تتبع بروتوكولات نظافة صارمة للحفاظ على سلامتك وراحتك. يخضع موظفونا لفحوصات صحية وتدريبات منتظمة. الطعام يُغلف في عبوات محكمة لمنع التلوث. حقائب التوصيل تُعقم عدة مرات يوميًا لمزيد من الأمان. نقدم أيضًا خيارات توصيل بدون تلامس لراحة بالك. معنا، النظافة ليست خيارًا بل ضمان." },
        { heading: "جدولة مرنة", content: "خطط مسبقًا وحدد وقت التوصيل الأنسب لك. النظام يسمح لك باختيار الوقت المناسب سواء في نفس اليوم أو اليوم التالي. هذا مثالي للمهنيين المشغولين أو المناسبات العائلية. حتى الطلبات المسبقة تحظى بنفس الاهتمام بالجودة والطزاجة. نضمن أن تكون وجبتك جاهزة في الوقت الذي تريده بالضبط." },
        { heading: "دعم العملاء", content: "دعمنا متوفر 24/7 لضمان حل أي مشكلة فورًا. سواء كان عنصر مفقود أو تأخير أو مشكلة تقنية، المساعدة على بعد مكالمة فقط. فريقنا مدرب على التعامل بسرعة وأدب. نأخذ الملاحظات بجدية لتحسين الخدمة باستمرار. نؤمن أن رعاية العملاء لا تقل أهمية عن الطعام نفسه. مع دعمنا الدائم، ستشعر دائمًا أنك محل تقدير واهتمام." },
      ],
    },
    {
      title: "تنوع واسع من المطابخ",
      intro: "لماذا تكتفي بنكهة واحدة بينما يمكنك استكشافها جميعًا؟ من الأطباق المحلية إلى العالمية، نقدم قائمة ترضي كل الأذواق.",
      sections: [
        { heading: "الأطباق المحلية", content: "نحتفي بالوصفات التقليدية التي تذكرك بالمنزل مع الحفاظ على التجديد. من الكاري الكلاسيكي إلى الوجبات الخفيفة الإقليمية، نكرم التقاليد ونبحث عن طرق الطهي الأصيلة للحفاظ على الطابع الثقافي. الأطباق المحلية يتم تعديلها أحيانًا لتناسب الأذواق الحديثة مع الحفاظ على التوازن. بهذه الطريقة، كل لقمة تجمع بين الحنين والتجديد. نحن نجلب دفء الطبخ المنزلي إلى مائدتك." },
        { heading: "الأطباق العالمية", content: "من الباستا الإيطالية إلى القلي الآسيوي، يقدم طهاتنا نكهات عالمية أصيلة على مائدتك. تتم دراسة كل وصفة بعناية للحفاظ على جذورها الثقافية. يتم استيراد أو اختيار المكونات محليًا لتتناسب مع المعايير العالمية. هدفنا أن نمنحك متعة السفر حول العالم من خلال الطعام. هذه الأطباق تتيح لك استكشاف العالم دون مغادرة مقعدك. كل وجبة هي جواز سفر لمغامرة طهي جديدة." },
        { heading: "أطباق الدمج", content: "مطبخنا يجرب مزج النكهات لصنع أطباق فريدة لا تجدها في مكان آخر. الدمج يسمح لنا بجمع أفضل ما في المطابخ المختلفة في طبق واحد. يوازن الطهاة النكهات بإبداع لإبهار حاسة التذوق لديك. غالبًا ما تكون أطباق الدمج عروضًا موسمية لإبقاء الأمور مثيرة. يحب العملاء تجربة كل جديد وغير متوقع. الابتكار هو جوهر قائمتنا، والدمج هو المكان الذي يتألق فيه." },
        { heading: "خيارات نباتية", content: "مجموعة واسعة من الوجبات النباتية والنباتية الصرفة تضمن أن الجميع يجد ما يحب. نستخدم بروتينات نباتية ومنتجات طازجة لصنع وجبات مشبعة. كل طبق مصمم ليكون غنيًا بالنكهة مثل نظيره غير النباتي. نبتكر وصفات نباتية جديدة مستوحاة من المطابخ العالمية. الحلويات النباتية وخيارات خالية من الألبان تضيف المزيد من التنوع. معنا، الطعام النباتي ليس مملًا أبدًا—بل احتفال بالنكهات." },
        { heading: "قوائم موسمية", content: "نقدم أطباقًا موسمية جديدة باستمرار للاحتفال بالمناسبات وتغيير الفصول. يتم استخدام المنتجات الموسمية في ذروة طزاجتها لضمان أفضل نكهة. هذه القوائم تحتفي بالمهرجانات المحلية والأعياد وتغير الطقس. من المشروبات الصيفية إلى الوجبات الشتوية الدافئة، هناك دائمًا تنوع. الأطباق الموسمية تتيح للطهاة الإبداع بوصفات جديدة. كل موسم يجلب لمسة جديدة لتجربتك." },
        { heading: "وجبات عائلية", content: "حصص كبيرة وأطباق عائلية تجعل تناول الطعام معًا أسهل وأكثر متعة. مشاركة الوجبات جزء من فلسفتنا الغذائية، فهي تقرب الناس من بعضهم. الكومبوهات العائلية مصممة لتناسب الأذواق المختلفة على الطاولة. نقدم أيضًا أطباقًا مناسبة للأطفال حتى لا يشعر أحد بالإقصاء. سواء كانت مناسبة أو عشاء عادي، الوجبات العائلية تناسب كل الأوقات. الطعام يصبح ألذ عندما يُستمتع به معًا، ونحن نضمن ذلك." },
        { heading: "شيء للجميع", content: "سواء وجبة خفيفة ليلية أو إفطار صحي أو عشاء احتفالي، لدينا ما يناسب الجميع. القائمة مصممة لتناسب جميع الأعمار وأنماط الحياة. من الوجبات الخفيفة إلى الولائم الفاخرة، الخيارات لا تنتهي. نواصل توسيع القائمة لتواكب تفضيلات العملاء المتغيرة. كل طبق يُحضر طازجًا بغض النظر عن الوقت أو الحجم. معنا، لن تنفد خياراتك اللذيذة أبدًا." },
      ],
    },
  ],
  he: [
    {
      title: "מרכיבים טריים ואיכותיים",
      intro: "כל מנה שאנו מכינים מתחילה במרכיבים הטריים והאיכותיים ביותר. אנו מאמינים שטריות היא סוד הטעם האותנטי ולכן אנו דואגים לאספקה יומית ומעדיפים איכות מעל הכל.",
      sections: [
        { heading: "מהחווה לשולחן", content: "אנו משתפים פעולה עם חקלאים וספקים אמינים כדי להביא לכם תוצרת עונתית שמבטיחה טריות וקיימות. כל ירק, פרי ועשב נבחרים בקפידה להעצמת הטעם של המנות שלנו. ברכישה ישירה מהחקלאים אנו מצמצמים מתווכים ומבטיחים איכות גבוהה יותר ומחירים הוגנים. הפילוסופיה הזו תומכת בקהילות מקומיות ומביאה אוכל מזין לשולחנכם. תוכלו ממש להרגיש את ההבדל כאשר הארוחות שלכם עשויות ממרכיבים טריים ומקומיים. זו הדרך שלנו להביא את הטוב שבטבע ישירות לצלחת שלכם." },
        { heading: "בשרים ודגים", content: "הבשרים שלנו מגיעים מחוות אחראיות להבטחת רכות, איכות וסטנדרטים אתיים. דגים טריים מגיעים מדי יום ומביאים טעמים חופיים אמיתיים. אנו נמנעים מהקפאה או טיפול כימי כדי לשמור על טעם טבעי וערכים תזונתיים. כל נתח בשר נבדק ומוכן לשמירה על עסיסיות וטעם. גם הדגים עוברים בדיקות קפדניות כדי להבטיח טריות ובטיחות. כשאתם אוכלים אצלנו, אתם יכולים לסמוך שכל חלבון איכותי, טעים ומקורו אחראי." },
        { heading: "בחירות בריאות", content: "אנו מאזנים בין טעם לתזונה, כך שכל ארוחה מזינה את גופך מבלי להתפשר על הטעם. מהאפשרויות ללא גלוטן ועד דלות פחמימות, התפריט שלנו מתאים לצרכים מגוונים. השפים שלנו עובדים עם תזונאים כדי לעצב מנות בריאות ומזינות. אנו גם מפחיתים שמן, נתרן וסוכר מבלי לאבד את הטעם האותנטי. תמיד תמצאו אצלנו חלופות בריאות, מושלמות לארוחות יומיומיות. לאכול בריא מעולם לא היה כל כך טעים ומספק." },
        { heading: "תבלינים ועשבים", content: "תערובת של תבלינים אותנטיים ועשבים טריים יוצרת את נשמת האוכל שלנו. מבזיליקום ארומטי ועד פלפל חריף, כל טעם מאוזן בקפידה. אנו טוחנים רבים מהתבלינים במקום לשמירה על שמנים טבעיים וטריות. עשבים נקטפים מדי יום להעצמת הטעם והארומה. השפים שלנו יוצרים תערובות תבלינים ייחודיות לכל מנה, כך שכל ארוחה מקבלת אופי ייחודי ואותנטי. התוצאה היא חוויית טעמים שמרגשת את החושים וגורמת לכם לרצות עוד." },
        { heading: "בחירת השף", content: "הטבחים שלנו בוחרים כל מתכון בקפידה, משלבים ניסיון של שנים עם טכניקות מודרניות להפתיע את בלוטות הטעם. רטבים, מרינדות ותוספות ייחודיות נבנים כדי להעצים מתכונים מסורתיים. כל מנה עוברת מספר טעימות לפני שמגיעה אליכם. מנות עונתיות מתווספות באופן קבוע כדי לשמור על תפריט דינמי ומרגש. התהליך הזה מבטיח שכל ארוחה מוכנה בתשוקה ובשלמות." },
        { heading: "מנות אהובות על הלקוחות", content: "מנות הדגל שהוכנו מהמרכיבים האיכותיים הללו הפכו לפופולריות במיוחד בקרב לקוחותינו, מה שמוכיח שאיכות מדברת בעד עצמה. רבות מהמנות שלנו נבנות בהשראת משוב מהלקוחות ומותאמות לטעמים פופולריים. מנות כמו הביריאני המיוחד, גריל ורטבים טריים הן להיטים כל השנה. אנו מציעים גם מנות עונתיות לפי טרנדים כדי לשמור על רעננות. כל מנה אהובה משתפרת כל הזמן כדי לשמור על המוניטין שלה. כשלקוחות חוזרים שוב ושוב לאותה מנה, אנחנו יודעים שאנחנו בדרך הנכונה." },
        { heading: "ההבטחה שלנו", content: "אנו מבטיחים מנות שמוכנות באהבה, אכפתיות ורק מהמרכיבים הטובים ביותר—כי אתם ראויים לטוב ביותר. תהליכי הרכש והבישול שלנו שקופים, כך שתוכלו לסמוך על מה שנכנס לאוכל שלכם. אנו בודקים את הסטנדרטים שלנו כל הזמן כדי לעמוד בציפיות הלקוחות ואף לעלות עליהן. היגיינה ובטיחות תמיד בעדיפות, מהמטבח ועד לשקית המשלוח. כל הזמנה משקפת את המחויבות שלנו למצוינות. אצלנו, אתם מקבלים לא רק אוכל—אלא הבטחה לטריות, טעם ואמון." },
      ],
    },
    {
      title: "משלוח מהיר ואמין",
      intro: "אנחנו יודעים שאתם רעבים ומעריכים את זמנכם. מערכת המשלוחים שלנו מבטיחה שההזמנה תגיע חמה, טרייה ובזמן—בכל פעם.",
      sections: [
        { heading: "מעקב חכם", content: "תמיד תדעו היכן האוכל שלכם בזכות מערכת מעקב בזמן אמת. מרגע ההזמנה תוכלו לעקוב אחרי ההכנה, השליחה וההגעה. האפליקציה מספקת עדכונים חיים כך שלעולם לא תישארו באי ודאות. המעקב גם עוזר לכם לתכנן את הזמן, בין אם זה הפסקת צהריים או ארוחת ערב משפחתית. שקיפות בונה אמון, ואנחנו דואגים שתהיו מעודכנים בכל שלב. זה משלוח חכם יותר, במיוחד בשבילכם." },
        { heading: "התחייבות לחום וטריות", content: "ההזמנות נארזות במכלים מבודדים כדי להבטיח שהאוכל יגיע כמו במסעדה. טכנולוגיית שמירת החום שומרת על האוכל חם מבלי לפגוע בטעם או במרקם. מנות קרות כמו סלטים וקינוחים נארזות בנפרד לשמירה על טריות. אנו בודקים את הסטנדרטים של האריזה כל הזמן. ההתחייבות הזו מראה שאכפת לנו מהחוויה שלכם. כשאתם פותחים את הקופסה, זה צריך להרגיש כאילו אתם יושבים אצלנו במסעדה." },
        { heading: "הגעה רחבה יותר", content: "השליחים שלנו מגיעים ליותר מקומות מאי פעם, כך שתוכלו ליהנות מהמנות האהובות עליכם בכל מקום. בין אם אתם במרכז העיר או בפרברים, אנחנו דואגים להביא את האוכל אליכם. אנו ממשיכים להרחיב את הרשת כדי שאף אחד לא יישאר רעב. עם מרכזי הפצה אסטרטגיים, האוכל לא נוסע רחוק, מה שמבטיח טריות. הפריסה הזו הופכת אותנו לאחת מהשירותים האמינים ביותר. איפה שלא תהיו, האושר מגיע עד הדלת." },
        { heading: "מהירות הבזק", content: "בממוצע, המשלוחים מגיעים בפחות מ-30 דקות—מושלם לארוחת צהריים מהירה או ארוחת ערב משפחתית. המערכת שלנו בוחרת מסלולים אופטימליים בעזרת אלגוריתמים חכמים כדי לקצר את זמן המשלוח. אנו גם מכשירים את השליחים לנסיעה בטוחה ומהירה. עיכובים כמו פקקים מדווחים מיד דרך עדכונים. המהירות הזו לא באה על חשבון איכות או בטיחות. אנחנו פשוט יודעים שכשאתם רעבים, הזמן חשוב." },
        { heading: "בטוח והיגייני", content: "כל המשלוחים מתבצעים לפי נהלי ניקיון מחמירים לשמירה על בטחונכם. הצוות עובר בדיקות בריאות והכשרות קבועות. האוכל נארז באריזות אטומות למניעת זיהום. תיקים מחוטאים מספר פעמים ביום. יש גם אפשרות למשלוח ללא מגע לשקט נפשי. אצלנו, ניקיון הוא לא אופציה—זהו סטנדרט." },
        { heading: "תזמון גמיש", content: "תכננו מראש ובחרו את זמן המשלוח הנוח לכם, אפילו ליום הבא. המערכת מאפשרת לבחור את הזמן המתאים ביותר. זה אידיאלי לאנשי עסקים עסוקים, לאירועים משפחתיים או לאירועים מתוכננים. גם הזמנות מראש מקבלות את אותה תשומת לב לאיכות וטריות. אנו דואגים שהאוכל שלכם יהיה מוכן בדיוק מתי שתרצו." },
        { heading: "שירות לקוחות", content: "השירות שלנו זמין 24/7 כדי לטפל בכל בעיה במהירות ובאדיבות. בין אם חסר פריט, יש עיכוב או בעיה טכנית—העזרה במרחק שיחה. הצוות שלנו מיומן בפתרון בעיות במהירות ובאדיבות. משוב מלקוחות מתקבל ברצינות ומשמש לשיפור השירות. אנו מאמינים שטיפול בלקוח חשוב לא פחות מהאוכל עצמו. עם שירות מסביב לשעון, תמיד תרגישו מוערכים ונשמעים." },
      ],
    },
    {
      title: "מגוון רחב של מטבחים",
      intro: "למה להסתפק בטעם אחד כשאפשר לגלות את כולם? ממנות מקומיות ועד מטבחים עולמיים, אנו מגישים תפריט שמספק כל חשק.",
      sections: [
        { heading: "מנות מקומיות", content: "אנו חוגגים מתכונים מסורתיים שמזכירים את הבית תוך שמירה על רעננות וחדשנות. ממנות קארי קלאסיות ועד חטיפים אזוריים, אנו מכבדים מסורות קולינריות. השפים שלנו חוקרים שיטות בישול אותנטיות לשמירה על דיוק תרבותי. מנות מקומיות מותאמות לעיתים לטעמים מודרניים תוך שמירה על איזון. כך כל ביס מרגיש נוסטלגי ומרענן. אנו מביאים את החום של אוכל ביתי לשולחן שלכם." },
        { heading: "מטעמים עולמיים", content: "מפסטה איטלקית ועד מוקפץ אסייתי, השפים שלנו מביאים טעמים עולמיים אמיתיים לשולחנכם. כל מתכון נלמד בקפידה לשמירה על שורשיו התרבותיים. מרכיבים מיובאים או נבחרים מקומית כדי להתאים לסטנדרטים עולמיים. המטרה שלנו היא לתת לכם תחושת מסע עולמי דרך האוכל. המנות האלו מאפשרות לכם לגלות את העולם בלי לצאת מהבית. כל ארוחה היא דרכון להרפתקה קולינרית חדשה." },
        { heading: "מנות פיוז'ן", content: "המטבח שלנו מתנסה בשילובי טעמים נועזים ליצירת מנות ייחודיות שלא תמצאו במקום אחר. פיוז'ן מאפשר לנו לשלב את הטוב שבכל מטבח בצלחת אחת. השפים מאזנים טעמים ביצירתיות כדי להפתיע את בלוטות הטעם. מנות פיוז'ן הן לרוב עונתיות כדי לשמור על עניין. לקוחות אוהבים לנסות דברים חדשים ומפתיעים. חדשנות היא ליבת התפריט שלנו, ופיוז'ן הוא המקום שבו היא בולטת." },
        { heading: "אפשרויות צמחוניות", content: "מבחר רחב של מנות צמחוניות וטבעוניות מבטיח שכל אחד ימצא משהו שהוא אוהב. אנו משתמשים בחלבונים מהצומח ותוצרת טרייה ליצירת מנות משביעות. כל מנה מעוצבת להיות עשירה בטעם כמו המקבילה הבשרית. אנו מחדשים מתכונים צמחוניים בהשראת מטבחים עולמיים. קינוחים טבעוניים ואפשרויות ללא חלב מוסיפים עוד גיוון. אצלנו, אוכל צמחוני הוא חגיגה של טעמים ולא שגרה משעממת." },
        { heading: "תפריטים עונתיים", content: "אנו מציעים מנות עונתיות חדשות כל הזמן לחגיגת חגים ועונות משתנות. תוצרת עונתית משמשת בשיא הטריות לטעם מיטבי. התפריטים האלו חוגגים פסטיבלים מקומיים, חגים ומזג אוויר משתנה. ממשקאות קיץ מרעננים ועד תבשילי חורף מחממים—יש תמיד גיוון. מנות עונתיות מאפשרות לשפים להתנסות במתכונים יצירתיים. כל עונה מביאה טוויסט חדש לחוויית האכילה שלכם." },
        { heading: "ארוחות משפחתיות", content: "מנות גדולות וקומבואים משפחתיים הופכים את הארוחה המשותפת למהנה וקלה יותר. שיתוף הארוחה הוא חלק מהפילוסופיה שלנו, ומקרב בין אנשים. קומבואים משפחתיים מותאמים לטעמים שונים סביב השולחן. יש גם מנות ידידותיות לילדים כדי שאף אחד לא ירגיש בחוץ. בין אם זו חגיגה או ארוחה יומיומית, ארוחות משפחתיות מתאימות לכל אירוע. אוכל טעים יותר כשנהנים ממנו יחד, ואנחנו דואגים שזה יקרה." },
        { heading: "משהו לכולם", content: "בין אם זו חטיף לילי, ארוחת בוקר בריאה או ארוחת חג, יש לנו משהו לכל אחד. התפריט שלנו מתאים לכל גיל ואורח חיים. ממנות קלות ועד סעודות מפנקות, אין סוף לאפשרויות. אנו ממשיכים להרחיב את התפריט בהתאם להעדפות הלקוחות. כל מנה מוכנה טרייה, לא משנה הגודל או הזמן. אצלנו, לעולם לא ייגמרו לכם האפשרויות הטעימות." },
      ],
    },
  ],
};


export default function BlogDetail() {
  // Theme and language state synced with Header
  const [theme, setTheme] = React.useState("light");
  const [language, setLanguage] = React.useState("en");
  // Map UI language names to codes
  const langMap = {
    English: 'en',
    Arabic: 'ar',
    Hebrew: 'he',
    en: 'en',
    ar: 'ar',
    he: 'he',
  };
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      const storedSelectedLang = localStorage.getItem("selectedLanguage") || 'English';
      setLanguage(langMap[storedSelectedLang] || 'en');
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem("theme") || "light";
        setTheme(newTheme);
      };
      const handleLangChange = () => {
        const newSelectedLang = localStorage.getItem("selectedLanguage") || 'English';
        setLanguage(langMap[newSelectedLang] || 'en');
      };
      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);
      window.addEventListener("language-changed", handleLangChange);
      window.addEventListener("storage", handleLangChange);
      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
        window.removeEventListener("language-changed", handleLangChange);
        window.removeEventListener("storage", handleLangChange);
      };
    }
  }, []);
  const { id } = useParams();

  // Blog images (order must match translations array)
  const blogImages = [feature1, feature2, feature3];

  // Find blog by id and language
  const blogIndex = parseInt(id, 10) - 1;
  const blog = translations[language] && translations[language][blogIndex];

  // Set RTL/LTR direction
  const dir = language === "ar" || language === "he" ? "rtl" : "ltr";

  if (!blog) {
    return (
      <div className={`text-center py-20 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
        dir={dir}
      >
  <h2 className="text-2xl font-bold text-red-500">Blog Not Found</h2>
        <Link to="/blog" className="text-red-500 underline mt-4 block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className={theme === "dark" ? "pt-20 min-h-screen bg-black text-white" : "pt-20 min-h-screen bg-white text-black"} dir={dir}>
      {/* Back Link */}
      <Link to="/blog" className="text-red-500 underline mt-4 block">
        {language === "ar" ? "العودة للمدونة" : language === "he" ? "חזרה לבלוגים" : "Back to Blogs"}
      </Link>

      {/* Blog Hero */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <img src={blogImages[blogIndex]} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>
        <p className={`text-lg md:text-xl max-w-5xl text-center mx-auto mb-12 ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}
          style={dir === "rtl" ? { textAlign: "right" } : { }}
        >
          {blog.intro}
        </p>

        {blog.sections.map((sec, index) => {
          // Generate slug id from heading
          const sectionId = sec.heading.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

          return (
            <div key={index} id={sectionId} className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 text-red-500" style={{ textAlign: dir === "rtl" ? "right" : "left" }}>
                {sec.heading}
              </h2>
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                style={dir === "rtl" ? { textAlign: "right" } : { }}
              >
                {sec.content}
              </p>
            </div>
          );


        })}
      </section>
  </div>
  );
}

