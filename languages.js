// to install, npm install handlebars, the to run, node generate.js

const fs = require("fs");
const Handlebars = require("handlebars");
const templateHTML = fs.readFileSync("template.html", "utf-8");
const template = Handlebars.compile(templateHTML);

const content = [
  {
    lang: "en",
    data: {
      language: "en",
      navOne: "about",
      navTwo: "submission guide",
      navThree: "language",
      title: "ABOUT",

      paragraphOne: `Activated, inspired by and in support of ruangrupa’s invocation for Documenta 15, lumbung, which translates from Indonesian to a communal rice barn, we wish to extend the narrative theme of collective sharing and nourishment to the public, to cultivate a community of artists and non-artists alike, from varied economic, academic and occupational backgrounds, cultural contexts and lived experiences.`,

      paragraphTwo: `We invite interested participants to submit multimedia expressions,
    ranging from text, image and video to interactive games or 3D
    sculpture, to be shown as guerrilla projections during Documenta 15
    in Kassel this July.`,

      paragraphThree: `We want to hear from people whose work engages critically with the global immigration policy and refugee crisis: from those traveling north from Central and South America, to people seeking refuge from the recent Russian invasion, to those relocating to Europe from the Middle East and North Africa, and beyond. We encourage submissions from people affected by these situations, as well as those who work in solidarity with marginalized peoples of the world.`,

      paragraphFour: `undocumenta is aligned with the voices and struggles of the people, using technology as a mechanism to disrupt extractive, unequal capitalist regimes and amplify the grievances of the global 99%. 
    `,
      sTitle: "SUBMIT",
      sParagraphOne: `Submissions might include agitprop, visions of hope, incantations of resistance, subversive, participatory games – and anything you can imagine disrupting the institutional setting of an internationally renowned art exhibition, such as Documenta. The goal of this call is to give visibility to those who otherwise don’t have access to this public platform. Note that it is free to submit, but we cannot pay any honorariums for participating artists.`,

      sParagraphTwo: `Your submission should include your name, a short bio, website, and social media handles (if you have them). We accept all forms of digital media, including images, videos, 3d models, etc. There is no wrong media so long as it can be projected or put on our website. Include your media as attachment(s) and use “undocumenta submission” as the subject line sent to: submissions@undocumenta.art.`,

      credits: "this site was designed and developed by tee with g and c",
    },
  },

  {
    lang: "de",
    data: {
      language: "de",
      navOne: "über",
      navTwo: "leitfaden für einreichungen",
      navThree: "sprache",
      title: "ÜBER",
      paragraphOne: `Angeregt, inspiriert und unterstützt von ruangrupas Aufruf zur Documenta 15,"lumbung", was aus dem Indonesischen übersetzt so viel wie "gemeinschaftliche Reisscheune" bedeutet, möchten wir das erzählerische Thema des kollektiven Teilens und Ernährens auf die Öffentlichkeit ausweiten, um eine Gemeinschaft von Künstlern und Nicht-Künstlern gleichermaßen zu kultivieren, die aus unterschiedlichen wirtschaftlichen, akademischen und beruflichen Hintergründen, kulturellen Kontexten und Lebenserfahrungen stammen.`,

      paragraphTwo: `Wir laden interessierte Teilnehmer ein, multimediale Arbeiten einzureichen, die von Text, Bild und Video bis hin zu interaktiven Spielen oder 3D-Skulpturen reichen und als Guerilla-Projektionen während der Documenta 15 im Juli in Kassel gezeigt werden sollen.`,

      paragraphThree: `Wir möchten von Menschen hören, deren Arbeiten sich kritisch mit der globalen Einwanderungspolitik und der Flüchtlingskrise auseinandersetzen: von denjenigen, die aus Mittel- und Südamerika nach Norden reisen, über Menschen, die vor der jüngsten russischen Invasion Zuflucht suchen, bis hin zu denjenigen, die aus dem Nahen Osten und Nordafrika und darüber hinaus nach Europa umziehen. Wir ermutigen zu Einsendungen von Menschen, die von diesen Situationen betroffen sind, sowie von denen, die sich mit den marginalisierten Völkern der Welt solidarisch zeigen.`,

      paragraphFour: `undocumenta ist auf die Stimmen und Kämpfe der Menschen ausgerichtet und nutzt Technologie als Mittel, um extraktive, ungleiche kapitalistische Regime zu stören und die Beschwerden der globalen 99% zu verstärken.`,
      sTitle: "SENDEN",

      sParagraphOne: `Eingereicht werden können Agitprop, Visionen der Hoffnung, Beschwörungen des Widerstands, subversive, partizipatorische Spiele - und alles, was Sie sich vorstellen können, um den institutionellen Rahmen einer international renommierten Kunstausstellung wie der Documenta zu stören. Das Ziel dieses Aufrufs ist es, denjenigen Sichtbarkeit zu verschaffen, die sonst keinen Zugang zu dieser öffentlichen Plattform haben. Beachten Sie, dass die Einreichung kostenlos ist, wir aber keine Honorare für die teilnehmenden Künstler zahlen können.`,

      sParagraphTwo: `Ihre Einsendung sollte Ihren Namen, eine kurze Biografie, Ihre Website und die Handles der sozialen Medien (falls vorhanden) enthalten. Wir akzeptieren alle Formen von digitalen Medien, einschließlich Bilder, Videos, 3D-Modelle usw. Es gibt keine falschen Medien, solange sie projiziert oder auf unsere Website gestellt werden können. Fügen Sie Ihre Medien als Anlage(n) bei und geben Sie in der Betreffzeile submission "undocumenta submission" an: submissions@undocumenta.art.`,
      credits: "diese deite wurde von tee mit g und c entworfen und entwickelt",
    },
  },
  {
    lang: "uk",
    data: {
      language: "uk",
      navOne: "про",
      navTwo: "керівництво по подання",
      navThree: "Мовa",
      title: "ПРО",

      paragraphOne: `Активізовані, натхненні та підтримуючи заклик руангрупи для Documenta 15, «lumbung», що перекладається з індонезійської як "загальний рисовий сарай", ми хочемо поширити тему колективного обміну та спілкування для публіки, щоб культивувати спільноту художників і не-художників, однаково, з різним економічним, академічним та професійним походженням, культурним контекстом і життєвим досвідом.`,

      paragraphTwo: `Ми запрошуємо зацікавлених учасників подати мультимедійні вирази, починаючи від тексту, зображень і відео, до інтерактивних ігор або 3D-скульптур, які будуть показані як guerrilla projections (проекції на будівлі )під час Documenta 15 у Касселі в липні цього року.`,

      paragraphThree: ` Ми хочемо почути людей, чия робота критично пов’язана з глобальною імміграційною політикою та кризою біженців: від тих, хто подорожує на північ із Центральної та Південної Америки, до людей, які шукають притулку від нещодавнього російського вторгнення, до тих, хтопереїжджає до Європи з Близького Сходу та Північної Африці і не тільки. Ми заохочуємо подавати заявки від людей, які постраждали від цих ситуацій, а також тих, хто працює на знак солідарності з маргіналізованими народами світу.
        `,
      paragraphFour: `Undocumenta узгоджується з голосами та боротьбою людей, використовуючи технології як механізм для руйнування екстрактивних, нерівних капіталістичних режимів та посилення невдоволень 99% світу.`,

      sTitle: "ПРЕДСТАВИТИ",
      sParagraphOne: `Заявки можуть включати агітпроп, бачення надії, заклинання опору, підривні ігри з участю – і все, що ви можете уявити, що порушує інституційну обстановку всесвітньо відомої художньої виставки, як-от Documenta. Мета цього закликання — надати видимості тим, хто інакше не має доступу до цієї публічної платформи.Зауважте, що подання безкоштовне, але ми не можемо виплачувати гонорари артистам-учасникам.
        `,
      sParagraphTwo: `Ваша заявка має включати ваше ім’я, коротку біографію, веб-сайт та реквізити соціальних мереж (якщо вони у вас є). Ми приймаємо всі форми цифрових медіа, включаючи зображення, відео, 3D-моделі тощо. Немає неправильних медіа, якщо їх можна спроектувати або розмістити на нашому веб-сайті. Включіть свої медіа-файли як вкладені файли та використовуйте «undocumenta submission» як тему, надіслану на: submissions@undocumenta.art.`,
      credits: "цей сайт був розроблений і розроблений трійником з g і c",
    },
  },
  
  {
    lang: "fr",
    data: {
      language: "fr",
      navOne: "À propos de",
      navTwo: "guide de soumission",
      navThree: "langue",
      title: "À PROPOS DE",

      paragraphOne: `Activés, inspirés et soutenant l'invocation de ruangrupa pour la Documenta 15, "lumbung", qui se traduit en indonésien par une grange à riz communautaire, nous souhaitons étendre au public le thème narratif du partage et de la nourriture collective, afin de cultiver une communauté d'artistes et de non-artistes, issus de milieux économiques, académiques et professionnels variés, de contextes culturels et d'expériences vécues. `,

      paragraphTwo: `Nous invitons les participants intéressés à soumettre des expressions multimédias, allant du texte, de l'image et de la vidéo aux jeux interactifs ou à la sculpture en 3D, qui seront présentées sous forme de projections de guérilla pendant la Documenta 15 à Kassel en juillet.`,

      paragraphThree: `Nous souhaitons entendre des personnes dont le travail s'engage de manière critique dans la politique d'immigration mondiale et la crise des réfugiés : des personnes voyageant vers le nord depuis l'Amérique centrale et l'Amérique du Sud, aux personnes vivant en Ukraine et cherchant un refuge contre la récente invasion russe, en passant par les personnes se déplaçant vers l'Europe depuis le Moyen-Orient et l'Afrique du Nord, et au-delà. Nous encourageons les soumissions de personnes affectées par ces situations, ainsi que celles qui travaillent en solidarité avec les peuples marginalisés du monde.`,
      
      paragraphFour: `undocumenta is aligned with the voices and struggles of the people, using technology as a mechanism to disrupt extractive, unequal capitalist regimes and amplify the grievances of the global 99%. `,
      
      sTitle: "ПРЕДСТАВИТИ",
      sParagraphOne: `Les propositions peuvent inclure de l'agitprop, des visions d'espoir, des incantations à la résistance, des jeux subversifs et participatifs - et tout ce que vous pouvez imaginer pour perturber le cadre institutionnel d'une exposition d'art de renommée internationale, telle que Documenta. L'objectif de cet appel est de donner une visibilité à ceux qui n'ont pas accès à cette plateforme publique. Envoyez-nous vos propositions à l'adresse submissions@undocumenta.art et découvrez-en davantage sur notre site web : https://undocumenta.art. Veuillez envoyer vos soumissions avant le 10 juillet. Notez que la soumission est gratuite, mais que nous ne pouvons verser aucun honoraire aux artistes participants.`,
      
      sParagraphTwo: `Su presentación debe incluir su nombre, una breve biografía, su sitio web y los datos de las redes sociales (si los tiene). Aceptamos todas las formas de medios digitales, incluyendo imágenes, vídeos, modelos 3D, etc. No hay ningún medio incorrecto siempre que pueda ser proyectado o puesto en nuestro sitio web. Incluye tus medios como archivos adjuntos y utiliza "undocumenta submission" como asunto enviado a: submissions@undocumenta.art`,
      
      credits: "",
    },
  },
  {
    lang: "tk",
    data: {
      language: "tk",
      navOne: "hakkinda",
      navTwo: "başvuru kılavuzu",
      navThree: "dil",
      title: "HAKKINDA",

      paragraphOne: `Ruangrupa'nın Documenta 15 için yaptığı ve Endonezyaca'da ortak pirinç ambarı anlamına gelen "lumbung" çağrısından esinlenerek ve bu çağrıyı destekleyerek, kolektif paylaşım ve beslenme temasını halka yaymak, farklı ekonomik, akademik ve mesleki geçmişlere, kültürel bağlamlara ve yaşanmış deneyimlere sahip sanatçılardan ve sanatçı olmayanlardan oluşan bir topluluk geliştirmek istiyoruz.`,

      paragraphTwo: `İlgilenen katılımcıları, bu Temmuz ayında Kassel'de düzenlenecek Documenta 15 sırasında gerilla projeksiyonları olarak gösterilmek üzere metin, görüntü ve videodan interaktif oyunlara veya 3D heykele kadar çeşitli multimedya ifadeleri göndermeye davet ediyoruz.`,

      paragraphThree: `Orta ve Güney Amerika'dan kuzeye seyahat edenlerden, Ukrayna'da yaşayan ve son Rus işgalinden kaçan insanlara, Orta Doğu ve Kuzey Afrika'dan Avrupa'ya ve ötesine taşınanlara kadar, çalışmaları küresel göç politikası ve mülteci kriziyle eleştirel bir şekilde ilgilenen kişilerden haber almak istiyoruz. Bu durumlardan etkilenen kişilerin yanı sıra dünyanın ötekileştirilmiş halklarıyla dayanışma içinde çalışanlardan gelen başvuruları teşvik ediyoruz.`,
      
      paragraphFour: `undocumenta, teknolojiyi çıkarcı, eşitsiz kapitalist rejimleri bozmak ve küresel %99'un şikayetlerini yükseltmek için bir mekanizma olarak kullanarak insanların sesleri ve mücadeleleri ile uyumludur.`,
      
      sTitle: "GÖNDER",
      sParagraphOne: `Başvurular arasında ajitprop, umut vizyonları, direniş büyüleri, yıkıcı, katılımcı oyunlar - ve Documenta gibi uluslararası üne sahip bir sanat sergisinin kurumsal ortamını bozmayı hayal edebileceğiniz her şey yer alabilir. Bu çağrının amacı, aksi takdirde bu kamusal platforma erişimi olmayanlara görünürlük kazandırmaktır. Başvurularınızı bize submissions@undocumenta.art adresinden gönderin ve daha fazlasını web sitemizde görün: https://undocumenta.art. Lütfen başvurularınızı 10 Temmuz'a kadar gönderin. Göndermek ücretsizdir, ancak katılımcı sanatçılar için herhangi bir onur ücreti ödeyemeyeceğimizi unutmayın.`,
      
      sParagraphTwo: `Başvurunuz adınızı, kısa bir özgeçmişinizi, web sitenizi ve sosyal medya hesaplarınızı (varsa) içermelidir. Resimler, videolar, 3 boyutlu modeller vb. dahil olmak üzere her türlü dijital medyayı kabul ediyoruz. Yansıtılabildiği veya web sitemize konulabildiği sürece yanlış medya yoktur. Medyanızı ek(ler) olarak ekleyin ve konu satırı olarak "undocumenta submission" kullanın ve şu adrese gönderin: submissions@undocumenta.art`,
      
      credits: "",
    },
  }
];

for (let item of content) {
  const lang = item.lang;
  const data = item.data;
  const filename = lang + ".html";
  const outputHTML = template(data);
  fs.writeFileSync(filename, outputHTML);
}
