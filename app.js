/* ── DATA ─────────────────────────────────────────────── */
const E = [
  {date:"1 Ekim 2024",y:2024,cat:"siyasi",title:"Bahçeli'nin DEM Parti milletvekilleriyle tokalaşması",desc:"TBMM 28. Dönem 3. Yasama Yılı açılışında MHP Genel Başkanı Bahçeli, DEM Parti sıralarına giderek Eş Genel Başkan Tuncer Bakırhan ve milletvekilleriyle tokalaştı. Bahçeli: 'Yeni bir döneme giriyoruz. Dünyada barış isterken kendi ülkemizde barışı sağlamak lazım' dedi.",url:"https://bianet.org/haber/meclis-teki-tokalamadan-tarihi-cagri-ya-surecte-neler-yasandi-304956"},
  {date:"15 Ekim 2024",y:2024,cat:"siyasi",title:"Bahçeli'nin Öcalan'a çağrısı",desc:"Bahçeli grup toplantısında PKK lideri Öcalan'a terörün bittiğini tek taraflı ilan etmesi çağrısı yaptı: 'Uzattığım el samimi ve iyi niyetli bir eldir' dedi.",url:"https://www.dw.com/tr/bah%C3%A7eliden-%C3%B6calana-pkk-%C3%A7a%C4%9Fr%C4%B1s%C4%B1/a-70500520"},
  {date:"15 Ekim 2024",y:2024,cat:"kadin",title:"Silopi'de Barış Anneleri ve gazetecilere gözaltı",desc:"Diyarbakır, Van, Batman, Mardin ve diğer illerden gelen Barış Anneleri 'Savaşa hayır barış hemen şimdi' talebiyle bir araya geldi. Kolluk kuvvetleri anneleri, gazetecileri ve DEM Parti yöneticilerini gözaltına aldı.",url:"https://bianet.org/haber/silopide-baris-anneleri-ve-gazetecilere-gozalti-300763"},
  {date:"22 Ekim 2024",y:2024,cat:"siyasi",title:"Bahçeli'nin tecridin kaldırılması önerisi",desc:"Bahçeli grup toplantısında Öcalan'ın tecridinin kaldırılması ve TBMM'de konuşma yapması önerisinde bulundu: 'Şayet terörist başının tecridi kaldırılırsa, gelsin TBMM'de DEM Parti grup toplantısında konuşsun' dedi.",url:"https://medyascope.tv/2024/10/22/bahceliden-ocalana-cagri-tecridi-kaldirilirsa-mecliste-konussun/"},
  {date:"23 Ekim 2024",y:2024,cat:"guvenlik",title:"TUSAŞ saldırısı",desc:"Ankara Kahramankazan'da TUSAŞ tesislerine bombalı ve silahlı saldırı düzenlendi. 5 kişi hayatını kaybetti, 22 yaralandı. Saldırıyı 25 Ekim'de PKK üstlendi.",url:"https://bianet.org/haber/ankarada-tusas-tesislerine-saldiri-301025"},
  {date:"24 Ekim 2024",y:2024,cat:"sivil",title:"İHD'nin barış çağrısı",desc:"İnsan Hakları Derneği Genel Merkezi, 'Barış Çağrımızda Israr Ediyoruz' başlıklı açıklama yayımladı.",url:"https://www.ihd.org.tr/baris-cagrimizda-israr-ediyoruz/"},
  {date:"30 Ekim 2024",y:2024,cat:"siyasi",title:"Esenyurt Belediye Başkanı gözaltı ve kayyum",desc:"CHP-DEM Parti kent uzlaşısıyla seçilen Ahmet Özer gözaltına alındı. İçişleri Bakanlığı yerine İstanbul Vali Yardımcısı Can Aksoy'u kayyum atadı.",url:"https://bianet.org/haber/chp-li-belediye-baskani-gozaltina-alindi-301229"},
  {date:"7 Kasım 2024",y:2024,cat:"sivil",title:"Barış Vakfı — Bütünlükçü Barış Yöntemi Raporu",desc:"Barış Vakfı, 'Kürt Sorunu İçin Bütünlükçü Barış Yöntemi' adıyla hazırladığı raporu yayımladı.",url:"https://politikahaber.com/kurt-sorunu-icin-butunlukcu-baris-yontemi-raporu/"},
  {date:"7 Aralık 2024",y:2024,cat:"sivil",title:"Geçmişin Tecrübesiyle Geleceğe Odaklanmak Çalıştayı",desc:"Barış Vakfı, vakfın kurucularından Ali Şükran Aktaş anısına çalıştay gerçekleştirdi.",url:"https://barisvakfi.org/turkiyenin-kritik-donemecinde-genis-katilimli-calistay/"},
  {date:"10 Aralık 2024",y:2024,cat:"sivil",title:"İHD & TİHV İnsan Hakları Günü Ortak Açıklaması",desc:"İHD ve TİHV başta olmak üzere birçok hak örgütü İstanbul Sultanahmet'te basın açıklaması yaptı.",url:"https://tihv.org.tr/basin-aciklamalari/"},
  {date:"16 Aralık 2024",y:2024,cat:"sivil",title:"Demokratik Çözüm ve Özgürlük Yürüyüşü",desc:"Demokratik Kurumlar Platformu öncülüğünde Diyarbakır'dan Ankara'ya yürüyüş başlatıldı. 'Kürt sorununda çözümün ilk esası Öcalan'ın fiziki özgürlüğüdür' mesajı öne çıktı.",url:"https://artigercek.com/politika/demokratik-cozum-ve-ozgurluk-yuruyusune-katilim-cagrisi-326208h"},
  {date:"27 Aralık 2024",y:2024,cat:"sivil",title:"Barış ve Demokrasi Hepimiz için çağrısı",desc:"Barış İçin Toplumsal Girişim, müzakere sürecinin başlatılması çağrısı yaptı.",url:"https://www.indyturk.com/node/753634/"},
  {date:"28 Aralık 2024",y:2024,cat:"pkk",title:"DEM Parti — Öcalan buluşması",desc:"DEM Parti milletvekilleri Sırrı Süreyya Önder ve Pervin Buldan, İmralı'da Abdullah Öcalan ile bir araya geldi.",url:"https://tr.euronews.com/2024/12/28/dem-parti-heyeti-ocalan-ile-gorusmek-uzere-imraliya-gitti"},
  {date:"2–7 Ocak 2025",y:2025,cat:"siyasi",title:"DEM Parti heyeti siyasi partilerle görüşmeler",desc:"DEM Parti heyeti TBMM'de MHP, AKP, Gelecek Partisi, Saadet Partisi, CHP, Yeniden Refah ve DEVA Partisi ile ayrı ayrı görüştü.",url:"https://www.demparti.org.tr/tr/dem-parti-imrali-heyeti-chp-deva-partisi-ve-yeniden-r-efah-partisi-ile-gorustu/20641/"},
  {date:"11 Ocak 2025",y:2025,cat:"sivil",title:"Kürt Meselesinin Çözümü ve Barışa Sivil Katkılar Çalıştayı",desc:"İHH İnsani Yardım Vakfı ve İNSAMER, Diyarbakır'da çalıştay düzenledi.",url:"https://ihh.org.tr/haber/kurt-meselesinin-cozumu-ve-barisa-sivil-katkiaar-calistayi-duzenlendi"},
  {date:"16 Ocak 2025",y:2025,cat:"sivil",title:"Barış için 1 Milyon İmza kampanyası",desc:"Halkların Demokratik Kongresi kampanyayı başlattı. Eş Sözcüsü Meral Danış Beştaş: 'Bugün belki de barışa çok yakınız' dedi.",url:"https://bianet.org/haber/hdkden-baris-icin-1-milyon-imza-kampanyasi-barisa-bir-sans-verelim-303680"},
  {date:"20 Ocak 2025",y:2025,cat:"kadin",title:"Kadınlar barış için buluşuyor — HDK Kadın Meclisi",desc:"HDK Kadın Meclisi, imza kampanyasını kadın örgütleriyle büyütmek amacıyla İstanbul Beyoğlu'nda bir toplantı gerçekleştirdi.",url:"https://artigercek.com/politika/kadinlar-baris-icin-bulustu"},
  {date:"8–9 Şubat 2025",y:2025,cat:"sivil",title:"Geçiş Dönemi Adaleti Uluslararası Konferansı",desc:"İHD, Eurumed Right, Demos Araştırma Kolektifi ve İHOP ortaklaşa konferans düzenledi. Avrupa, Ortadoğu ve Kuzey Afrika'dan akademisyen, hukukçu, siyasetçi ve Cumartesi Anneleri katıldı.",url:"https://politikahaber.com/gecis-donemi-adaleti-konferansi-imralidan-gelecek-olan-aciklamayi-ele-alarak-calismaliyiz/"},
  {date:"20 Şubat 2025",y:2025,cat:"sivil",title:"Barış Vakfı Basın Açıklaması",desc:"Vakıf, 1 Ekim 2024'ten itibaren barış ve demokratik değişim yönünde umut verici hazırlıklar yapıldığını açıkladı.",url:"https://barisvakfi.org/basin-aciklamasi-2/"},
  {date:"22–23 Şubat 2025",y:2025,cat:"kadin",title:"Kadınlar Barışı Konuşuyor çalıştayı — Barışa İhtiyacım Var inisiyatifi kuruldu",desc:"İstanbul çalıştayına 100'ü aşkın kadın katıldı. Çalıştay sonunda 'Barışa İhtiyacım Var' sloganıyla yeni kadın inisiyatifi kurulduğu duyuruldu.",url:"https://catlakzemin.com/kadinlar-barisi-konusuyor-calistayi-sonuc-bildirgesi-yayinlandi/"},
  {date:"27 Şubat 2025",y:2025,cat:"pkk",title:"Öcalan'ın tarihi çağrısı — PKK'ye silah bırakma",desc:"DEM Parti heyeti İmralı'dan Öcalan'ın mesajını İstanbul'da kamuoyuyla paylaştı. Öcalan PKK'ye silah bırakma çağrısı yaparak tarihi sorumluluğu üstlendi.",url:"https://bianet.org/yazi/ocalanin-cagrisi-tarihi-bir-kirilma-ani-304964"},
  {date:"2 Mart 2025",y:2025,cat:"sivil",title:"DİTAM — Kürt Meselesinin Çözümünde Ortaklaşmak",desc:"Tigris Diyalogları kapsamında toplantıda Kürt meselesinin çözümüne dair siyaset, devlet, Kürtler ve muhalefetin bakış açıları tartışıldı.",url:"https://ditam.org/tr_tr/kurt-meselesinin-cozumunde-ortaklasmak-toplantisi/"},
  {date:"7 Mart 2025",y:2025,cat:"kadin",title:"Kadınların barışa ihtiyacı var — İHD İstanbul",desc:"8 Mart öncesinde İHD İstanbul Şubesi Kadın Komisyonu, Şişhane Meydanı'nda basın açıklaması yaptı.",url:"https://bianet.org/haber/insan-haklari-savunucusu-kadinlar-baris-istiyoruz-305203"},
  {date:"15 Mart 2025",y:2025,cat:"sivil",title:"İzmir Barış Forumu",desc:"Farklı toplumsal grupları barışa giden yolları konuşmak üzere bir araya getirdi. Sonuç bildirgesinde: 'Barış sadece savaşın sona ermesiyle değil, adaletin sağlanmasıyla mümkün olacak. Meclis derhal toplanmalı' denildi.",url:"https://politikahaber.com/izmir-baris-forumu-meclis-toplanmali-komisyon-kurulmali/"},
  {date:"26 Nisan 2025",y:2025,cat:"sivil",title:"Kürt Sorununda Silahsızlanma Çalıştayı — Barış Vakfı",desc:"Barış Vakfı, İstanbul'da avukat Hüsnü Öndül'ün anısına çalıştay düzenledi.",url:"https://barisvakfi.org/silahsizlanma-calistayi-aciklamasi/"},
  {date:"5–7 Mayıs 2025",y:2025,cat:"pkk",title:"PKK 12. Kongresi — Fesih ve silah bırakma kararı",desc:"PKK, Öcalan'ın çağrısı üzerine kongre gerçekleştirdi. PKK'nin feshedilmesi ve silahlı mücadeleyi sonlandırması kararları alındı.",url:"https://www.dw.com/tr/pkkdan-fesih-ve-silah-b%C4%B1rakma-karar%C4%B1/a-72512197"},
  {date:"23 Mayıs 2025",y:2025,cat:"sivil",title:"Barış Tecrübeleri Konferansı — FES & Sabancı Üniversitesi",desc:"Friedrich-Ebert-Stiftung Türkiye ve Sabancı Üniversitesi, İstanbul'da uluslararası konferans düzenledi.",url:"https://turkey.fes.de/e/baris-suereclerin-canlandirirken-duenya-tecruebelerinden-ders-cikarmak.html"},
  {date:"21–22 Haziran 2025",y:2025,cat:"sivil",title:"Barış ve Demokratik Toplum Süreci Çalıştayı — İHD Diyarbakır",desc:"Barışa giden yol: Hafıza ve adalet başlıklı çalıştay, Uğur Kaymaz ve Eren Bülbül'ün annelerinin mesajlarıyla açıldı.",url:"https://bianet.org/haber/barisa-giden-yol-hafiza-ve-adalet-toplantisinun-sonuc-bildirgesi-aciklandi-308731"},
  {date:"22 Haziran 2025",y:2025,cat:"sivil",title:"Barışın Yolunu Açmak Konferansı",desc:"Barış İçin Toplumsal Girişim, İstanbul'da konferans düzenledi.",url:"https://www.demparti.org.tr/tr/barisin-yolunu-acmak-konferansi-bircok-kesimi-bir-araya-getirdi/22066/"},
  {date:"8 Temmuz 2025",y:2025,cat:"kadin",title:"Barışa İhtiyacım Var Kadın İnisiyatifi TBMM önü açıklaması",desc:"Meclisin barışın hukuki temelini atması, siyasetin suç olmaktan çıkarılması ve kayyum uygulamalarının kaldırılması talep edildi.",url:"https://www.barısaihtiyacimvar.com/"},
  {date:"11 Temmuz 2025",y:2025,cat:"pkk",title:"PKK silah yakma töreni — Casene Mağarası",desc:"PKK, Irak Kürdistan'ındaki Casene Mağarası bölgesinde silah yakma töreni gerçekleştirdi. MİT, Irak Merkezi Yönetimi ve IKBY temsilcileri gözlemci olarak katıldı.",url:"https://bianet.org/haber/pkknin-silah-birakma-toreninden-ilk-izlenimler-309376"},
  {date:"18 Temmuz 2025",y:2025,cat:"tbmm",title:"TBMM Başkanı Kurtulmuş — Komisyon toplantısı",desc:"TBMM Başkanı Numan Kurtulmuş, komisyon için koordinatör olarak belirlenen grup başkan vekillerini toplantıya davet etti.",url:"https://www.bbc.com/turkce/articles/c8j12njp7reo"},
  {date:"5 Ağustos 2025",y:2025,cat:"tbmm",title:"Milli Dayanışma, Kardeşlik ve Demokrasi Komisyonu — ilk toplantı",desc:"Komisyonun ismi belirlendi ve 12 maddelik çalışma usul ve esasları oybirliğiyle kabul edildi.",url:"https://www.bbc.com/turkce/articles/cm2vn1vlj2xo"},
  {date:"9 Ağustos 2025",y:2025,cat:"sivil",title:"Amed Barış Çalıştayı — Eleştirel Barış Ağı",desc:"50 sivil toplum örgütünün katılımıyla Diyarbakır Ticaret ve Sanayi Odası binasında çalıştay gerçekleştirildi.",url:"https://www.evrensel.net/haber/564888/"},
  {date:"19 Ağustos 2025",y:2025,cat:"tbmm",title:"Komisyon — Gazi Dernekleri ve Diyarbakır Anneleri dinlendi",desc:"Gazi ve şehit aileleri vakıfları ile Diyarbakır Anneleri komisyonda dinlendi. Diyarbakır Anneleri çocuklarının eve dönmesini istedi.",url:"https://www.bbc.com/turkce/articles/cnv76ryq81no"},
  {date:"20 Ağustos 2025",y:2025,cat:"tbmm",title:"Komisyon 5. Toplantısı — Cumartesi Anneleri, Barış Anneleri, İHD",desc:"Cumartesi Anneleri rapor sundu. Barış Anneleri Kürtçe konuşma talebinde bulundu; bu tutanaklara geçti.",url:"https://bianet.org/haber/cumartesi-anneleri-insanlari-komisyona-raporlarini-sundu-310656"},
  {date:"27 Ağustos 2025",y:2025,cat:"tbmm",title:"Komisyon 6. Toplantısı — Türkiye Barolar Birliği",desc:"TBB Başkanı ve 10 baro başkanı komisyona görüşlerini sundu.",url:"https://www.barobirlik.org.tr/Haberler/birlik-baskani-sagkan-tbmm-milli-dayanisma-kardeslik-ve-demokrasi-komisyonu-toplantisinda-tbbni--85850"},
  {date:"1 Eylül 2025",y:2025,cat:"sivil",title:"Dünya Barış Günü — Türkiye genelinde eylemler",desc:"TJA Sur'da Barış Kürsüsü açık forumu düzenledi. İHD mesajında barış komisyonunun tüm tarafları dinlemesini ve Kürt dili yasaklarının kaldırılmasını talep etti.",url:"https://bianet.org/haber/ihd-siyasal-iradeyi-bariscil-politikalar-gelistirmeye-cagiriyoruz-311020"},
  {date:"13 Eylül 2025",y:2025,cat:"sivil",title:"KÜRT-KAV — Kürtler Barış Süreci'nin Neresinde konferansı",desc:"KÜRT-KAV sivil girişimi konferans düzenledi.",url:"https://www.rupelanu.org/kurt-kav-baris-sureci-icin-kurtlerin-konumunu-masaya-yatiriyor-33019h.htm"},
  {date:"27 Eylül 2025",y:2025,cat:"sivil",title:"İHD — Kürt Meselesinin Çözümüne Dair Yasal Değişiklik Önerileri",desc:"İHD, kalıcı barış için Türkiye mevzuatının uluslararası standartlara uygun hale getirilmesi gerektiğini belirtti.",url:"https://enternasyonaldayanisma.org/2025/09/27/ihdden-baris-icin-yasal-duzenleme-cagrisi/"},
  {date:"4 Ekim 2025",y:2025,cat:"sivil",title:"Barış İçin LGBTİ+ İnisiyatifi (BİL+) kuruldu",desc:"LGBTİ+ örgütleri ve hak savunucuları yeni inisiyatif kurduğunu ilan etti. 9 ilde eş zamanlı basın açıklamaları yapıldı.",url:"https://bianet.org/haber/baris-icin-lgbti-inisiyatifi-kurulusunu-acikladi-312445"},
  {date:"8 Ekim 2025",y:2025,cat:"sivil",title:"45 edebiyatçı ve sanatçıdan barış çağrısı",desc:"Antalya'da bir araya gelen 45 kişi ortak çağrı yaptı: 'Dünya dört altın direk üstünde yükselir: Emek, adalet, özgürlük, barış.'",url:"https://mezopotamyaajansi40.com/tum-haberler/content/view/288881?page=2"},
  {date:"11 Ekim 2025",y:2025,cat:"rojava",title:"Democratic Progress Institute — Barış İnşasında Sivil Toplumun Rolü",desc:"Uluslararası STK DPI, Ankara'da çalıştay düzenledi.",url:"https://www.posttruthdergi.com/baris-insasinda-sivil-toplumun-rolu/"},
  {date:"19–20 Ekim 2025",y:2025,cat:"kadin",title:"Barış Anneleri Meclisi — 12 yıl aradan sonra büyük konferans",desc:"Türkiye genelinden Barış Anneleri, 12 yıl aradan sonra ilk kez Diyarbakır'da geniş katılımlı toplantıda bir araya geldi.",url:"https://www.baglar.bel.tr/tr/post/27593/esbaskan-ayaz-baris-anneleri-ile-konferansta"},
  {date:"26 Ekim 2025",y:2025,cat:"sivil",title:"Özgür-Der — Ortak Gelecek: Türkiye'de Kürtler sempozyumu",desc:"Diyarbakır'da gerçekleşen sempozyuma akademisyen ve kanaat önderlerinin yanı sıra Kürdistan Bölgesel Yönetimi'nden parti yöneticileri katıldı.",url:"https://www.haksozhaber.net/service/amp/ortak-gelecek-turkiyede-kurtler-kardeslik-ve-toplumsal-baris-sempozyumu-gerceklestir-196226h.htm"},
  {date:"26 Ekim 2025",y:2025,cat:"pkk",title:"PKK Türkiye'deki tüm güçlerini geri çekti",desc:"KÖH yönetimi: 'Türkiye'deki tüm güçlerimizi geri çekiyoruz. Demokratik entegrasyon yasaları gecikmeden çıkarılmalıdır' dedi.",url:"https://www.agos.com.tr/tr/yazi/36131/pkk-turkiye-deki-tum-gucleri-geri-cekiyoruz"},
  {date:"11 Kasım 2025",y:2025,cat:"siyasi",title:"DEM Parti — Süreç ikinci aşamaya geçti",desc:"DEM Eş Genel Başkanı Tülay Hatimoğulları: 'Bir yılı aşkındır devam eden süreç, ikinci aşamaya geçmiş durumda. İkinci aşama demokratik siyasetin zamanıdır.'",url:"https://www.agos.com.tr/tr/haber/hatimogullari-surec-ikinci-asamaya-gecti"},
  {date:"12 Kasım 2025",y:2025,cat:"kadin",title:"HDK Kadın Meclisi 25 Kasım Deklarasyonu",desc:"'Savaşa, şiddete, yoksulluğa karşı kadınlar barışı inşa ediyor' sloganıyla deklarasyon açıklandı.",url:"https://bianet.org/haber/hdk-kadin-meclisinden-25-kasim-deklarasyonu-baris-kadinlarin-varligiyla-mumkundur"},
  {date:"24 Kasım 2025",y:2025,cat:"tbmm",title:"Tarihi İmralı ziyareti — TBMM Komisyonu Öcalan ile görüştü",desc:"AKP'den Hüseyin Yayman, MHP'den Feti Yıldız ve DEM'den Gülistan Koçyiğit İmralı'ya giderek Öcalan ile görüştü.",url:"https://tr.euronews.com/2025/12/04/ocalanla-gorusme-tutanagi-tbmm-komisyonunda-okundu"},
  {date:"25 Kasım 2025",y:2025,cat:"kadin",title:"Ankara Kadın Platformu — 25 Kasım meşaleli yürüyüş",desc:"'Savaşları çıkaran erkek egemen zihniyetin karşısında, barış için sesimizi çıkarmaya devam ediyoruz.'",url:"https://bianet.org/haber/kadinlar-ve-lgbti-lar-ankaradan-seslendi-barisin-garantisiyiz-313885"},
  {date:"26 Kasım 2025",y:2025,cat:"siyasi",title:"Millî Güvenlik Kurulu toplantısı",desc:"MGK bildirisinde Terörsüz Türkiye hedefine yönelik çok boyutlu çalışmaların sürdürüldüğü vurgulandı.",url:"https://www.mgk.gov.tr/index.php/mgk-toplantisi-26112025"},
  {date:"6–7 Aralık 2025",y:2025,cat:"rojava",title:"Uluslararası Barış ve Demokratik Toplum Konferansı",desc:"Bask, Güney Afrika, İrlanda, Katalonya, İngiltere ve Belçika'dan siyasetçi ve akademisyenler çatışma çözümü deneyimlerini paylaştı.",url:"https://bianet.org/haber/istanbulda-uluslararasi-baris-ve-demokratik-toplum-konferansi-duzenlenecek-313813"},
  {date:"6 Aralık 2025",y:2025,cat:"sivil",title:"Barış İçin LGBTİ+ (BİL+) İlk Genel Kurul",desc:"9 ildeki 60 delegenin katıldığı genel kurulda mutabakat metni onaylandı ve 2026 yol haritası belirlendi.",url:"https://kaosgl1.org/haber/baris-icin-lgbti-ilk-genel-kurulunu-yapti"},
  {date:"10 Aralık 2025",y:2025,cat:"kadin",title:"Barış Anneleri — İnsan Hakları Günü açıklamaları",desc:"İstanbul, Diyarbakır, İzmir, Van'da Barış Anneleri eş zamanlı toplanarak Öcalan'ın fiziki özgürlüğünü talep etti.",url:"https://mezopotamyaajansi35.com"},
  {date:"19 Aralık 2025",y:2025,cat:"tbmm",title:"AKP Komisyon Raporu TBMM'ye sunuldu",desc:"15 başlık, 60 sayfalık raporda: 'Türkiye yeni bir dönemin eşiğindedir. Temel amaç, terörün son bulmasıyla oluşan atmosferi kalıcı güvenliğin yapıtaşlarına dönüştürmektir.'",url:"https://www.agos.com.tr/tr/haber/akp-komisyon-raporunu-meclise-sundu-38900"},
  {date:"6 Ocak 2026",y:2026,cat:"rojava",title:"Halep'te SDG ve Suriye Ordusu çatışmaları",desc:"Halep'in Şeyh Maksud ve Eşrefiye mahallelerinde DSG ile Suriye ordusu arasında yoğun silahlı çatışmalar yaşandı.",url:"https://www.reuters.com/world/middle-east/syrian-army-sdg-aleppo-2026-01-06/"},
  {date:"10 Ocak 2026",y:2026,cat:"kadin",title:"Ankara Kadın Mitingi — 60 kadın kurumu",desc:"'Haklarımız, hayatlarımız ve özgürlüğümüz için bir aradayız' şiarıyla yürüdü. 'Jin, jiyan, azadî' sloganları atıldı.",url:"https://bianet.org/haber/kadinlar-ankarada-bulustu-haklarimiz-hayatlarimiz-ve-ozgurlugumuz-icin-buradayiz-315467"},
  {date:"13 Ocak 2026",y:2026,cat:"pkk",title:"KCK — Halep saldırıları ve süreç hakkında açıklama",desc:"KCK Eşbaşkanlığı: 'Türk devleti baştan itibaren Halep'in Kürt mahallelerine yapılan saldırıların içinde olmuştur' dedi.",url:"https://medyascope.tv/2026/01/13/kck-kabul-edilmeyecek-bir-yasa-cikarilip-savas-mi-baslatilmak-planlanmaktadir/"},
  {date:"17 Ocak 2026",y:2026,cat:"siyasi",title:"DEM Parti — uzun aradan sonra İmralı ziyareti",desc:"Aralık başından beri ziyaret gerçekleşmiyordu. Suriye'deki HTŞ saldırıları süreçteki krizlerin yansıması olarak okunuyor.",url:"https://bianet.org/haber/ocalandan-suriyede-cozum-icin-ortak-akil-ve-diyalog-cagrisi-315720"},
  {date:"18 Ocak 2026",y:2026,cat:"sivil",title:"34 sivil toplum örgütünden forum — Barış için ortak mücadele",desc:"'Barış ve Demokratik Toplum Süreci'nde tek konu silah bırakma değil. Kürt sorunu Rojava ile bütünlüklüdür. Bu fırsatı değerlendirmezsek 100 yıl daha bekleriz.'",url:"https://politikahaber.com/34-sivil-toplum-orgutunden-forum-baris-icin-ortak-mucadele-sart/"},
  {date:"20 Ocak 2026",y:2026,cat:"kadin",title:"Barışa İhtiyacım Var — Rojava eylemleri Ankara ve İstanbul",desc:"'HTŞ çetelerine destek Suriye'de katliam demektir' pankartları açıldı. Ankara ve İstanbul'da eş zamanlı eylemler.",url:"https://bianet.org/haber/rojava-icin-sokaga-cikan-kadinlar-hts-erkek-siddetinin-yeni-adi-315831"},
  {date:"22 Ocak 2026",y:2026,cat:"rojava",title:"Halkların Karavanı — 10+ ülkeden 200+ aktivist",desc:"Küresel RiseUp4Rojava ağı önderliğinde Avrupa'nın dört rotasından 200'ü aşkın aktivist Türkiye'ye doğru yola çıktı.",url:"https://siyasihaber10.org/halklarin-karavani-turkiye-sinirindan-geri-cevrild-i-enternasyonalistlere-gozalti/"},
  {date:"24 Ocak 2026",y:2026,cat:"siyasi",title:"DEM Parti, HDK — İstanbul Rojava yürüyüşü",desc:"Aksaray Meydanı'ndan Saraçhane'ye yürüyüş gerçekleşti. DEM Parti İstanbul İl Eşbaşkanı gözaltına alındı.",url:"https://tr.euronews.com/2026/01/24/dem-partiden-suriye-protestosu-istanbul-il-es-baskani-gozaltina-alindi"},
  {date:"27 Ocak 2026",y:2026,cat:"kadin",title:"Barışa İhtiyacım Var — 30 ülkeden 216 örgütün uluslararası bildirisi",desc:"Üç acil talep: Saldırıların durdurulması, Kobanê kuşatmasının kaldırılması ve sivillere yönelik savaş suçlarının son bulması.",url:"https://bianet.org/haber/mursitpinar-sinir-kapisi-acilsin-guvenli-yasam-kosullari-saglansin-316151"},
  {date:"28 Ocak 2026",y:2026,cat:"rojava",title:"Halkların Karavanı — Türkiye sınırında durduruldu",desc:"Karavan ana konvoyu Edirne sınırında durduruldu. 16 enternasyonalist Diyarbakır üzerinden Mardin'e giderken gözaltına alındı.",url:"https://english.anf-news.com"},
  {date:"29 Ocak 2026",y:2026,cat:"sivil",title:"16 Baro — Mürşitpınar Sınır Kapısı'nın açılması talebi",desc:"Doğu ve güneydoğudan 16 Baro; Kobani bölgesine insani yardımların ulaştırılması için sınır kapısının derhal açılmasını talep etti.",url:"https://bianet.org/haber/16-barodan-ortak-cagri-mursitpinar-sinir-kapisi-derhal-acilsin-316145"},
  {date:"29 Ocak 2026",y:2026,cat:"kadin",title:"Barışa İhtiyacım Var — Suruç sınır hattı eylemi",desc:"Barış talebini Kobanê sınır hattına taşıyan kadınlar İstanbul ve Ankara'dan yola çıktı.",url:"https://bianet.org/haber/mursitpinar-sinir-kapisi-acilsin-guvenli-yasam-kosullari-saglansin-316151"},
  {date:"30 Ocak 2026",y:2026,cat:"rojava",title:"Halkların Karavanı Suruç'a ulaştı",desc:"Güvenlik güçlerini atlatan enternasyonalistler Suruç'a ulaştı. DEM Parti, DBP ve TJA üyeleri çiçeklerle karşıladı.",url:"https://siyasihaber10.org/halklarin-kervani-surucu-ulasti/"},
  {date:"31 Ocak 2026",y:2026,cat:"siyasi",title:"CHP — Toplumsal Barış ve Demokrasi Konferansı",desc:"CHP, Kürt sorununa barışçıl çözüm arayışına katkı amacıyla İstanbul Kongre Merkezi'nde dört panel düzenledi.",url:"https://medyascope.tv/2026/01/30/chp-toplumsal-baris-ve-demokrasi-konferansi-duzenleyecek/"}
];

const CONNS = [
  [0,1,"siyasi"],[1,3,"siyasi"],[3,12,"pkk"],[12,20,"pkk"],[20,25,"pkk"],[25,30,"pkk"],[30,46,"pkk"],[46,51,"tbmm"],[51,57,"tbmm"],
  [2,16,"kadin"],[16,19,"kadin"],[19,22,"kadin"],[22,29,"kadin"],[29,44,"kadin"],[44,48,"kadin"],[48,51,"kadin"],[51,58,"kadin"],[58,62,"kadin"],[62,68,"kadin"],
  [32,33,"tbmm"],[33,35,"tbmm"],[35,36,"tbmm"],[36,37,"tbmm"],[37,51,"tbmm"],[51,57,"tbmm"],
  [5,9,"sivil"],[9,17,"sivil"],[17,41,"sivil"],
  [59,64,"rojava"],[64,71,"rojava"],[71,72,"rojava"],[72,74,"rojava"],
  [7,18,"sivil"],[18,24,"sivil"]
];

/* ── CATEGORY CONFIG ──────────────────────────────────── */
var CATS = {
  siyasi:   { label: "Siyasi",   color: "#4f8ef7" },
  sivil:    { label: "Sivil",    color: "#3ecf8e" },
  kadin:    { label: "Toplumsal Cinsiyet", color: "#e879a0" },
  pkk:      { label: "PKK/KCK",  color: "#f5a623" },
  tbmm:     { label: "TBMM",     color: "#a07cf7" },
  rojava:   { label: "Rojava",   color: "#e05c5c" },
  guvenlik: { label: "Güvenlik", color: "#888888" }
};

/* ── STATE ────────────────────────────────────────────── */
var activeFilter = "all";
var searchQuery  = "";

/* ── DOM REFS ─────────────────────────────────────────── */
var tlInner    = document.getElementById("tlInner");
var tlOuter    = document.getElementById("tlOuter");
var connSvg    = document.getElementById("connSvg");
var filterBtns = document.getElementById("filterBtns");
var searchInput = document.getElementById("searchInput");
var clearBtn   = document.getElementById("clearBtn");
var heroStats  = document.getElementById("heroStats");
var footerCount = document.getElementById("footerCount");

/* ── HIGHLIGHT HELPER ─────────────────────────────────── */
function hl(text, q) {
  if (!q) return text;
  var escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  var re = new RegExp('(' + escaped + ')', 'gi');
  return text.replace(re, "<mark>$1</mark>");
}

/* ── BUILD CARD HTML ──────────────────────────────────── */
function buildCardHTML(ev, idx, q) {
  var cfg = CATS[ev.cat] || { label: ev.cat, color: "#888" };
  var hlTitle = hl(ev.title, q);
  var hlDesc  = hl(ev.desc, q);
  var hlDate  = hl(ev.date, q);

  var html = "";
  html += '<div class="ev-card" id="card-' + idx + '" data-idx="' + idx + '" style="color:' + cfg.color + '">';
  html += '  <div class="ev-card-header">';
  html += '    <div class="ev-card-meta">';
  html += '      <div class="ev-date">' + hlDate + '</div>';
  html += '      <div class="ev-title">' + hlTitle + '</div>';
  html += '    </div>';
  html += '    <span class="ev-cat-badge" style="color:' + cfg.color + ';border-color:' + cfg.color + '">' + cfg.label + '</span>';
  html += '    <span class="ev-toggle">+</span>';
  html += '  </div>';
  html += '  <div class="ev-body">';
  html += '    <div class="ev-desc">' + hlDesc + '</div>';
  html += '    <a class="ev-source" href="' + ev.url + '" target="_blank" rel="noopener">';
  html += '      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">';
  html += '        <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>';
  html += '      </svg>';
  html += '      Kaynağa git';
  html += '    </a>';
  html += '  </div>';
  html += '</div>';
  return html;
}

/* ── COMPUTE VISIBLE INDICES ──────────────────────────── */
function getVisibleIndices() {
  var result = [];
  for (var i = 0; i < E.length; i++) {
    var ev = E[i];
    var catOk = (activeFilter === "all" || ev.cat === activeFilter);
    var q = searchQuery.toLowerCase();
    var searchOk = true;
    if (q) {
      var combined = (ev.title + " " + ev.desc + " " + ev.date + " " + ev.cat).toLowerCase();
      searchOk = combined.indexOf(q) !== -1;
    }
    if (catOk && searchOk) result.push(i);
  }
  return result;
}

/* ── RENDER TIMELINE ──────────────────────────────────── */
function render() {
  tlInner.innerHTML = "";

  var visible = getVisibleIndices();
  var noRes = document.getElementById("noResults");
  if (!noRes) {
    noRes = document.createElement("div");
    noRes.id = "noResults";
    noRes.className = "no-results";
    noRes.textContent = "Sonuç bulunamadı.";
    tlOuter.appendChild(noRes);
  }

  if (visible.length === 0) {
    noRes.classList.add("visible");
    connSvg.innerHTML = "";
    return;
  }
  noRes.classList.remove("visible");

  var lastYear = null;
  var sideCounter = 0; // counts visible events to alternate sides

  for (var vi = 0; vi < visible.length; vi++) {
    var idx = visible[vi];
    var ev = E[idx];

    // Year separator
    if (ev.y !== lastYear) {
      lastYear = ev.y;
      var yr = document.createElement("div");
      yr.className = "year-row";
      yr.innerHTML = '<span class="year-label">' + ev.y + '</span>';
      tlInner.appendChild(yr);
    }

    var side = (sideCounter % 2 === 0) ? "left" : "right";
    sideCounter++;

    var cfg = CATS[ev.cat] || { color: "#888" };

    var wrap = document.createElement("div");
    wrap.className = "ev-wrap " + side;
    wrap.dataset.idx = String(idx);

    // Card column
    var cardCol = document.createElement("div");
    cardCol.className = "ev-card-col";
    cardCol.innerHTML = buildCardHTML(ev, idx, searchQuery);

    // Dot column
    var dotCol = document.createElement("div");
    dotCol.className = "spine-dot-col";
    dotCol.innerHTML = '<div class="spine-dot" id="dot-' + idx + '" style="color:' + cfg.color + ';border-color:' + cfg.color + '"></div>';

    // Empty column
    var empty = document.createElement("div");
    empty.className = "ev-empty";

    if (side === "left") {
      wrap.appendChild(cardCol);
      wrap.appendChild(dotCol);
      wrap.appendChild(empty);
    } else {
      wrap.appendChild(empty);
      wrap.appendChild(dotCol);
      wrap.appendChild(cardCol);
    }

    tlInner.appendChild(wrap);
  }

  // Init scroll animations
  initScrollObserver();

  // Draw SVG connections after layout
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      drawConnections();
    });
  });
}

/* ── SCROLL ANIMATION ─────────────────────────────────── */
function initScrollObserver() {
  var cards = tlInner.querySelectorAll(".ev-card");
  if (!("IntersectionObserver" in window)) {
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.add("is-visible");
    }
    return;
  }

  var obs = new IntersectionObserver(function(entries) {
    for (var e = 0; e < entries.length; e++) {
      if (entries[e].isIntersecting) {
        entries[e].target.classList.add("is-visible");
        obs.unobserve(entries[e].target);
      }
    }
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  for (var i = 0; i < cards.length; i++) {
    obs.observe(cards[i]);
  }
}

/* ── SVG CONNECTIONS ──────────────────────────────────── */
function drawConnections() {
  connSvg.innerHTML = "";

  var outerRect = tlOuter.getBoundingClientRect();

  // Set SVG height to match container scroll height
  connSvg.setAttribute("height", tlOuter.scrollHeight);
  connSvg.setAttribute("width", tlOuter.offsetWidth);
  connSvg.style.height = tlOuter.scrollHeight + "px";
  connSvg.style.width = "100%";

  for (var c = 0; c < CONNS.length; c++) {
    var conn = CONNS[c];
    var fromIdx = conn[0];
    var toIdx   = conn[1];
    var cat     = conn[2];

    var dotF = document.getElementById("dot-" + fromIdx);
    var dotT = document.getElementById("dot-" + toIdx);

    if (!dotF || !dotT) continue;

    var rfF = dotF.getBoundingClientRect();
    var rfT = dotT.getBoundingClientRect();

    var x1 = rfF.left + 6 - outerRect.left;
    var y1 = rfF.top  + 6 - outerRect.top  + tlOuter.scrollTop;
    var x2 = rfT.left + 6 - outerRect.left;
    var y2 = rfT.top  + 6 - outerRect.top  + tlOuter.scrollTop;

    var midY = (y1 + y2) / 2;
    var offset = Math.min(Math.abs(x2 - x1) * 0.6 + 40, 120);

    var d = "M " + x1 + "," + y1 + " C " + (x1 + offset) + "," + midY + " " + (x2 - offset) + "," + midY + " " + x2 + "," + y2;

    var cfg = CATS[cat] || { color: "#888" };
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("stroke", cfg.color);
    path.setAttribute("data-from", String(fromIdx));
    path.setAttribute("data-to", String(toIdx));
    path.setAttribute("data-cat", cat);
    path.classList.add("visible");

    connSvg.appendChild(path);
  }
}

/* ── BLUR HOVER EFFECT ────────────────────────────────── */
function getConnectedIndices(idx) {
  var connected = {};
  connected[idx] = true;
  for (var c = 0; c < CONNS.length; c++) {
    var conn = CONNS[c];
    if (conn[0] === idx) connected[conn[1]] = true;
    if (conn[1] === idx) connected[conn[0]] = true;
  }
  return connected;
}

function applyHover(hoveredIdx) {
  var connected = getConnectedIndices(hoveredIdx);
  var wraps = tlInner.querySelectorAll(".ev-wrap");
  tlInner.classList.add("has-hover");

  for (var i = 0; i < wraps.length; i++) {
    var w = wraps[i];
    var wIdx = parseInt(w.dataset.idx, 10);
    if (wIdx === hoveredIdx) {
      w.classList.add("hovered");
      w.classList.remove("conn-hovered");
    } else if (connected[wIdx]) {
      w.classList.add("conn-hovered");
      w.classList.remove("hovered");
    } else {
      w.classList.remove("hovered");
      w.classList.remove("conn-hovered");
    }
  }

  // Highlight connected SVG paths
  var paths = connSvg.querySelectorAll("path");
  for (var p = 0; p < paths.length; p++) {
    var pFrom = parseInt(paths[p].getAttribute("data-from"), 10);
    var pTo   = parseInt(paths[p].getAttribute("data-to"),   10);
    if (connected[pFrom] && connected[pTo]) {
      paths[p].classList.add("highlighted");
    } else {
      paths[p].classList.remove("highlighted");
    }
  }
}

function clearHover() {
  tlInner.classList.remove("has-hover");
  var wraps = tlInner.querySelectorAll(".ev-wrap");
  for (var i = 0; i < wraps.length; i++) {
    wraps[i].classList.remove("hovered");
    wraps[i].classList.remove("conn-hovered");
  }
  var paths = connSvg.querySelectorAll("path");
  for (var p = 0; p < paths.length; p++) {
    paths[p].classList.remove("highlighted");
  }
}

/* ── CARD CLICK: EXPAND/COLLAPSE ─────────────────────── */
function toggleCard(card) {
  var wasExpanded = card.classList.contains("expanded");
  // Collapse all
  var all = tlInner.querySelectorAll(".ev-card.expanded");
  for (var i = 0; i < all.length; i++) {
    all[i].classList.remove("expanded");
  }
  if (!wasExpanded) {
    card.classList.add("expanded");
  }
  // Redraw connections after card toggle (heights may shift)
  requestAnimationFrame(function() {
    drawConnections();
  });
}

/* ── EVENT DELEGATION ─────────────────────────────────── */
tlInner.addEventListener("click", function(e) {
  var card = e.target.closest(".ev-card");
  if (!card) return;
  var link = e.target.closest("a");
  if (link) return; // let link open
  toggleCard(card);
});

tlInner.addEventListener("mouseenter", function(e) {
  var wrap = e.target.closest(".ev-wrap");
  if (!wrap) return;
  var idx = parseInt(wrap.dataset.idx, 10);
  if (!isNaN(idx)) applyHover(idx);
}, true);

tlInner.addEventListener("mouseleave", function(e) {
  var wrap = e.target.closest(".ev-wrap");
  if (!wrap) return;
  var related = e.relatedTarget;
  if (related && related.closest && related.closest(".ev-wrap") === wrap) return;
  clearHover();
}, true);

/* ── FILTERS ──────────────────────────────────────────── */
function buildFilters() {
  var html = "";
  html += '<button class="filter-btn active" data-cat="all">';
  html += '<span class="dot" style="background:rgba(255,255,255,0.4)"></span>Tümü</button>';

  var keys = Object.keys(CATS);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    html += '<button class="filter-btn" data-cat="' + k + '">';
    html += '<span class="dot" style="background:' + CATS[k].color + '"></span>';
    html += CATS[k].label + '</button>';
  }
  filterBtns.innerHTML = html;

  filterBtns.addEventListener("click", function(e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeFilter = btn.dataset.cat;
    var all = filterBtns.querySelectorAll(".filter-btn");
    for (var i = 0; i < all.length; i++) {
      all[i].classList.toggle("active", all[i].dataset.cat === activeFilter);
    }
    render();
  });
}

/* ── SEARCH ───────────────────────────────────────────── */
searchInput.addEventListener("input", function() {
  searchQuery = searchInput.value.trim();
  clearBtn.classList.toggle("visible", searchQuery.length > 0);
  render();
});

clearBtn.addEventListener("click", function() {
  searchInput.value = "";
  searchQuery = "";
  clearBtn.classList.remove("visible");
  render();
  searchInput.focus();
});

/* ── HERO STATS ───────────────────────────────────────── */
function buildHeroStats() {
  var years = {};
  var cats  = {};
  for (var i = 0; i < E.length; i++) {
    years[E[i].y] = (years[E[i].y] || 0) + 1;
    cats[E[i].cat] = (cats[E[i].cat] || 0) + 1;
  }

  var catKeys = Object.keys(cats);
  var topCat = catKeys[0];
  for (var c = 1; c < catKeys.length; c++) {
    if (cats[catKeys[c]] > cats[topCat]) topCat = catKeys[c];
  }

  var yKeys = Object.keys(years).sort();
  var statsHTML = "";
  statsHTML += '<div class="stat-item"><span class="stat-num">' + E.length + '</span><span class="stat-label">Toplam Olay</span></div>';

  for (var y = 0; y < yKeys.length; y++) {
    statsHTML += '<div class="stat-item"><span class="stat-num">' + years[yKeys[y]] + '</span><span class="stat-label">' + yKeys[y] + '</span></div>';
  }

  statsHTML += '<div class="stat-item"><span class="stat-num">' + Object.keys(cats).length + '</span><span class="stat-label">Kategori</span></div>';
  statsHTML += '<div class="stat-item"><span class="stat-num">' + CONNS.length + '</span><span class="stat-label">Bağlantı</span></div>';

  heroStats.innerHTML = statsHTML;
  footerCount.textContent = E.length;
}

/* ── RESIZE: REDRAW SVG ───────────────────────────────── */
var resizeTimer;
window.addEventListener("resize", function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    drawConnections();
  }, 150);
});

/* ── INIT ─────────────────────────────────────────────── */
buildHeroStats();
buildFilters();
render();

/* ── TAB SWITCHING ──────────────────────────────────────── */
document.getElementById("tabNav").addEventListener("click", function(e) {
  var btn = e.target.closest(".tab-btn");
  if (!btn) return;
  var target = btn.dataset.tab;
  var allBtns = document.querySelectorAll(".tab-btn");
  for (var i = 0; i < allBtns.length; i++) {
    allBtns[i].classList.toggle("active", allBtns[i].dataset.tab === target);
  }
  var panels = document.querySelectorAll(".tab-panel");
  for (var j = 0; j < panels.length; j++) {
    panels[j].classList.toggle("active", panels[j].id === "tab-" + target);
  }
});

/* ── THEME TOGGLE ───────────────────────────────────────── */
(function() {
  var btn = document.getElementById("themeToggle");
  var root = document.documentElement;
  var stored = localStorage.getItem("kronoloji-theme");
  if (stored === "light") root.setAttribute("data-theme", "light");

  function sunIcon() {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/><line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/></svg>';
  }
  function moonIcon() {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  function updateIcon() {
    btn.innerHTML = root.getAttribute("data-theme") === "light" ? moonIcon() : sunIcon();
  }
  updateIcon();

  btn.addEventListener("click", function() {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    if (next === "dark") {
      root.removeAttribute("data-theme");
      localStorage.setItem("kronoloji-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("kronoloji-theme", "light");
    }
    updateIcon();
  });
})();
