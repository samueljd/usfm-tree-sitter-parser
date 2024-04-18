const rem_under_one_id = String.raw`\id GEN
\rem Only a remark`;
const rem_under_one_h_marker = String.raw`\id GEN
\ide utf-8
\usfm 3.0
\h Genesis
\rem a remark`;
const rem_between_toc_markers_and_h = String.raw`\id GEN
\ide utf-8
\usfm 3.0
\h Genesis
\rem another remark
\toc1 genesis
\toc2 gen
\toc3 the book of genesis!!!!!`;
const sts_under_one_id = String.raw`\id GEN
\sts status code!!!!!`;
const sts_under_one_h_marker = String.raw`\id GEN
\ide utf-8
\usfm 3.0
\h Genesis
\sts status!!!!`;
const sts_between_toc_markers_and_h = String.raw`\id GEN
\ide utf-8
\usfm 3.0
\h Genesis
\sts 2
\toc1 genesis
\toc2 gen
\toc3 the book of genesis`;
const sts_and_rem_maker_together_in_header_section = String.raw`\id GEN
\ide utf-8
\usfm 3.0
\h Genesis
\sts status
\rem and a remark!!!!!`;
const intro_markers_set_1 = String.raw`\id MAT 41MATGNT92.SFM, Good News Translation, June 2003
\usfm 3.0
\h SAN MARCOS
\mt2 Evangelio según
\mt1 SAN MARCOS
\imt1 INTRODUCCIÓN
\is1 Importancia del evangelio de Marcos
\ip Este evangelio, segundo de los libros del NT, contiene poco material que no aparezca igualmente en 
\ipi Many Protestants consider the following books to be Apocrypha as defined above: Tobit, Judith, additions to Esther (as found in Greek Esther in the CEV) ...
\imi  Translation it is that opens the window, to let in the light; that breaks the shell, that we may eat the kernel; that puts aside the curtain, that we may look into the most holy place; that removes the cover of the well, that we may come by the water. (“The Translators to the Reader,” King James Version, 1611).
\im The most important document in the history of the English language is the King James Version of the Bible...!!!!!`;
const intro_markers_set_2 = String.raw`\id MAT 41MATGNT92.SFM, Good News Translation, June 2003
\ip One of these brothers, Joseph, had become the governor of Egypt. But Joseph knew that God would someday keep his promise to his people:
\ib
\ipq Before Joseph died, he told his brothers, “I won't live much longer. 
\imq But God will take care of you and lead you out of Egypt to the land he promised Abraham, Isaac, and Jacob.”
\ipr (50.24)
\iq1 God our Savior showed us
\iq2 how good and kind he is.
\iq1 He saved us because
\iq2 of his mercy,
\iot Outline of Contents
\io1 The beginning of the gospel \ior (1.1-13)\ior*
\io1 Jesus' public ministry in Galilee \ior (1.14–9.50)\ior*
\io1 From Galilee to Jerusalem \ior (10.1-52)\ior*
\io1 The last week in and near Jerusalem!!!!!`;
const intro_markers_set_3 = String.raw`\id MAT 41MATGNT92.SFM, Good News Translation, June 2003
\ip However, he is more than a teacher, healer, or  miracle-worker. He is also ...
\ili 1  The Messiah is the one promised by God, the one who would come and free God's people. By the time  The Gospel of Mark appeared, the title "Messiah" (in Greek,  christ") had become ...
\ili 2  The Son of God is the title by which the heavenly voice addresses Jesus at his baptism (1.11) and his transfiguration ...
\ili 3  The Son of Man is the title most...
\imte End of the Introduction to the Gospel of Mark
\ie`;
const id_c_v_markers = String.raw`\id MAT some other info of file
\c 1
\p
\v 1 verse text`;
const cl_markers = String.raw`\id GEN
\c 1
\cl chapter
\p 
\v 1 text`;
const cl_ca_cp_markers = String.raw`\id GEN
\h some header
\cl label before chapter
\c 1
\ca 2 \ca*
\cp i
\p
\v 1 text
\v 2 text again`;
const verse_number_patterns = String.raw`\id GEN
\c 1
\p
\v 1 text
\v 2a text
\v 2b text
\v 3-4a text
\v 4b text`;
const va_vp_markers = String.raw`\id GEN
\c 1
\p 
\v 1 text - text
\v 2 \va 1a \va* text
\v 3 \va 2 \va*   \vp I-I \vp* text
\v 3 \va 2 \va* \va 2b \va* text
\v 4 \vp I-I \vp* text`;
const ca_cp_va_vp_markers_occuring_within_content = String.raw`\id GEN
\c 1
\p 
\v 1 text - text
\v 2 again text
\cp 1
\p
\v 3 The first verse of after some a represented vp marker
\va 3a \va* with va occuring away from v 
\v 3 some more text \vp I-I \vp* and vp occuring away from v
\ca 1 \ca* 
\p
\v 4 text after a ca that is thrown in the middle of a chapter content`;
const headers_and_titles = String.raw`\id MAT 41MATGNT92.SFM, Good News Translation, June 2003
\usfm 3.0
\toc1 The Acts of the Apostles
\toc2 Acts
\mt1 THE ACTS
\mt2 of the Apostles
\c 1
\ms BOOK ONE
\mr (Psalms 1–41)
\s True Happiness
\p
\v 1 ക്രിസ്തുയേശുവിന്റെ ബദ്ധനായ ...
\s1 The Thirty Wise Sayings
\sr (22.17--24.22)
\r (Mark 1.1-8; Luke 3.1-18; John 1.19-28)
\p
\v 2 നമ്മുടെ പിതാവായ ...
\sd2
\p
\v 3 കർത്താവായ യേശുവിനോടും ...
\v 4 The Son was made greater than the angels, just as the name that God gave him is greater than theirs.
\v 5 For God never said to any of his angels,
\mte2 The End of the Gospel according to
\mte1 John`;
const simple_p = String.raw`\id MAT 41MATGNT92.SFM, Good News Translation, June 2003
\usfm 3.0
\toc1 The Acts of the Apostles
\toc2 Acts
\ip One of these brothers, Joseph, had become...
\ipr (50.24)
\c 1
\s1 The Preaching of John the Baptist
\r (Matthew 3.1-12; Luke 3.1-18; John 1.19-28)
\p
\v 1 This is the Good News about Jesus Christ, the Son of God.
\v 2 It began as the prophet Isaiah had written:`;
const m = String.raw`\id GEN
\c 1
\p
\v 35 As Jesus was teaching in the Temple, he asked the question, “How can the teachers
of the Law say that the Messiah will be the descendant of David?
\v 36 The Holy Spirit inspired David to say:
\q1 ‘The Lord said to my Lord:
\q2 Sit here at my right side
\q2 until I put your enemies under your feet.’
\b
\m
\v 37 David himself called him ‘Lord’; so how can the Messiah be David's descendant?”`;
const po = String.raw`\id GEN
\c 1
\po
\v 1 From Paul, a servant of Christ Jesus and an apostle chosen and called by God to
preach his Good News.
\p
\v 2 The Good News was promised long ago by God through his prophets, as written in the
Holy Scriptures.
\v 3 It is about his Son, our Lord Jesus Christ: as to his humanity, he was born a
descendant of David;
\v 4 as to his divine holiness, he was shown with great power to be the Son of God by being
raised from death.
\v 5 Through him God gave me the privilege of being an apostle for the sake of Christ,
in order to lead people of all nations to believe and obey.
\v 6 This also includes you who are in Rome, whom God has called to belong to Jesus Christ.
\po
\v 7 And so I write to all of you in Rome whom God loves and has called to be his own
people:
\po May God our Father and the Lord Jesus Christ give you grace and peace.`;
const pr = String.raw`\id GEN
\c 1
\p
\v 15 “ ‘God's curse on anyone who makes an idol of stone, wood, or metal and secretly
worships it; the Lord hates idolatry.’
\pr “And all the people will answer, ‘Amen!’
\p
\v 16 “ ‘God's curse on anyone who dishonors his father or mother.’
\pr “And all the people will answer, ‘Amen!’
\p
\v 17 “ ‘God's curse on anyone who moves a neighbor's property line.’
\pr “And all the people will answer, ‘Amen!’`;
const cls = String.raw`\id GEN
\c 1
\p
\v 18 With my own hand I write this:. Do not forget my chains!
\cls May God's grace be with you.`;
const pmo_pm_and_pmc = String.raw`\id GEN
\c 1
\p
\v 22 The apostles, the leaders, and all the church members decided to send some men to
Antioch along with Paul and Barnabas. They chose Silas and Judas Barsabbas, who were two
leaders of the Lord's followers.
\v 23 They wrote a letter that said:
\pmo We apostles and leaders send friendly greetings to all of you Gentiles who are
followers of the Lord in Antioch, Syria, and Cilicia.
\pm
\v 24 We have heard that some people from here have terribly upset you by what they said.
But we did not send them!
\v 25 So we met together and decided to choose some men and to send them to you along with
our good friends Barnabas and Paul.
\v 26 These men have risked their lives for our Lord Jesus Christ.
\v 27 We are also sending Judas and Silas, who will tell you in person the same things that
we are writing.
\pm
\v 28 The Holy Spirit has shown us that we should not place any extra burden on you.
\v 29 But you should not eat anything offered to idols. You should not eat any meat that
still has the blood in it or any meat of any animal that has been strangled. You must also
not commit any terrible sexual sins. If you follow these instructions, you will do well.
\pmc We send our best wishes.`;
const pi_mi = String.raw`\id GEN
\c 1
\s1 Jesus Explains the Story about the Weeds
\p
\v 36 After Jesus left the crowd and went inside, his disciples came to him and said,
“Explain to us the story about the weeds in the wheat field.”
\p
\v 37 Jesus answered:
\pi The one who scattered the good seed is the Son of Man.
\v 38 The field is the world, and the good seeds are the people who belong to the kingdom.
The weed seeds are those who belong to the evil one,
\v 39 and the one who scattered them is the devil. The harvest is the end of time, and
angels are the ones who bring in the harvest.
\pi
\v 16 You people are like children sitting in the market and shouting to each other,
\b
\q1
\v 17 “We played the flute,
\q2 but you would not dance!
\q1 We sang a funeral song,
\q2 but you would not mourn!”
\b
\mi
\v 18 John the Baptist did not go around eating and drinking, and you said, “That man has
a demon in him!”
\v 19 But the Son of Man goes around eating and drinking, and you say, “That man eats and
drinks too much! He is even a friend of tax collectors ...`;
const nb = String.raw`\id GEN
\c 7
\p
\v 52 Then they said, “Nicodemus, you must be from Galilee! Read the Scriptures, and you
will find that no prophet is to come from Galilee.”
\s1 A Woman Caught in Sin
\p
\v 53 Everyone else went home,
\c 8
\nb
\v 1 but Jesus walked out to the Mount of Olives.
\v 2 Then early the next morning he went to the temple. The people came to him, and he
sat down and started teaching them.`;
const pc = String.raw`\id GEN
\c 1
\p
\v 4 The woman was dressed in purple and scarlet robes, and she wore jewelry made of
gold, precious stones, and pearls. In her hand she held a gold cup filled with the filthy
and nasty things she had done.
\v 5 On her forehead a mysterious name was written:
\pc I AM THE GREAT CITY OF BABYLON, THE MOTHER OF EVERY IMMORAL AND FILTHY THING ON EARTH.
\m
\v 6 I could tell that the woman was drunk on the blood of God's people who had given
their lives for Jesus. This surprising sight amazed me, ...`;
const q = String.raw`\id GEN
\c 3
\s1 A Prayer of Habakkuk
\p
\v 1 This is a prayer of the prophet Habakkuk:
\b
\q1
\v 2 O Lord, I have heard of what you have done,
\q2 and I am filled with awe.
\q1 Now do again in our times
\q2 the great deeds you used to do.
\q1 Be merciful, even when you are angry.`;
const qr = String.raw`\id GEN
\c 136
\s1 God's Love Never Fails
\q1
\v 1 Praise the Lord! He is good.
\qr God's love never fails.
\q1
\v 2 Praise the God of all gods.
\qr God's love never fails.
\q1
\v 3 Praise the Lord of lords.
\qr God's love never fails.`;
const qc = String.raw`\id GEN
\c 1
\q1
\v 18 Praise the Lord, the God of Israel!
\q1 He alone does these wonderful things.
\q1
\v 19 Praise his glorious name forever!
\q1 May his glory fill the whole world.
\b
\qc Amen! Amen!
\b
\q1
\v 20 This is the end of the prayers of David son of Jesse.`;
const qs = String.raw`\id GEN
\c 3
\s1 Trust in God under Adversity
\d A Psalm of David, when he fled from his son Absalom.
\q1
\v 1 O Lord, how many are my foes!
\q2 Many are rising against me;
\q1
\v 2 many are saying to me,
\q2 “There is no help for you \qs Selah\qs*`;
const qa = String.raw`\id GEN
\c 119
\qa Aleph
\q1
\v 1 Blessed are they whose ways are blameless,
\q2 who walk according to the law of the Lord.
...
\qa Beth
\q1
\v 9 How can a young man keep his way pure?
\q2 By living according to your word.`;
const qac = String.raw`\id GEN
\c 1
\s1 Primer lamento acróstico
\s2 El profeta
\q1
\v 1 ¡\qac P\qac*obrecita de ti, Jerusalén!
\q1 Antes eras la más famosa
\q1 de todas las ciudades.
\q1 ¡Antes estabas llena de gente,
\q1 pero te has quedado muy sola,
\q1 te has quedado viuda!
\q1 ¡Fuiste la reina de las naciones,
\q1 pero hoy eres esclava de ellas!
\b
\q1
\v 2 \qac O\qac*lvidada y bañada en lágrimas
\q1 pasas todas las noches.
\q1 Muchos decían que te amaban,
\q1 pero hoy nadie te consuela.
\q1 Los que se decían tus amigos
\q1 hoy son tus enemigos.`;
const qm = String.raw`\id GEN
\c 1
\p
\v 18 God's spirit took control of one of them, Amasai, who later became the commander
of “The Thirty,” and he called out,
\qm1 “David son of Jesse, we are yours!
\qm1 Success to you and those who help you!
\qm1 God is on your side.”
\b
\m David welcomed them and made them officers in his army.`;
const qd = String.raw`\id GEN
\c 1
\q1 \v 18 yet I will rejoice in the Lord,
\q2 I will be joyful in God my Savior.
\b
\q1 \v 19 The Sovereign Lord is my strength;
\q2 he makes my feet like the feet of a deer,
\q2 he enables me to tread on the heights.
\b
\qd For the director of music. On my stringed instruments.`;
const b = String.raw`\id GEN
\c 3
\s1 Morning Prayer for Help
\q1
\v 1 I have so many enemies, Lord,
\q2 so many who turn against me!
\q1
\v 2 They talk about me and say,
\q2 “God will not help him.”
\b
\q1
\v 3 But you, O Lord, are always my shield from danger;
\q2 you give me victory
\q2 and restore my courage.
\q1
\v 4 I call to the Lord for help,
\q2 and from his sacred hill he answers me.
\b
\q1
\v 5 I lie down and sleep,
\q2 and all night long the Lord protects me.
\q1
\v 6 I am not afraid of the thousands of enemies
\q2 who surround me on every side.`;
const list = String.raw`\id GEN
\c 3
\s1 Administration of the Tribes of Israel
\lh
\v 16-22 This is the list of the administrators of the tribes of Israel:
\li1 Reuben - Eliezer son of Zichri
\li1 Simeon - Shephatiah son of Maacah
\li1 Levi - Hashabiah son of Kemuel
\li1 Aaron - Zadok
\li1 Judah - Elihu, one of King David's brothers
\li1 Issachar - Omri son of Michael
\li1 Zebulun - Ishmaiah son of Obadiah
\li1 Naphtali - Jeremoth son of Azriel
\li1 Ephraim - Hoshea son of Azaziah
\li1 West Manasseh - Joel son of Pedaiah
\li1 East Manasseh - Iddo son of Zechariah
\li1 Benjamin - Jaasiel son of Abner
\li1 Dan - Azarel son of Jeroham
\lf This was the list of the administrators of the tribes of Israel.`;
const only_li = String.raw`\id GEN
\c 3
\p
\v 84-88 The totals of the offerings brought by the twelve leaders for the dedication of
the altar were as follows:
\li –twelve silver bowls and twelve silver basins weighing a total of 60 pounds
\li –twelve gold dishes weighing a total of 48 ounces, filled with incense
\li –twelve bulls, twelve rams, and twelve one-year-old lambs, plus the grain offerings that
go with them, for the burnt offerings
\li –twelve goats for the sin offerings
\li –twenty-four bulls, sixty rams, sixty goats, sixty one-year-old lambs, for the fellowship
offerings`;
const lim_litl = String.raw`\id GEN
\c 1
\pm
\v 6 These are the people of the province who came up from the captivity of the exiles
whom Nebuchadnezzar king of Babylon had taken captive (they returned to Jerusalem and
Judah, each to his own town,
\v 7 in company with Zerubbabel, Jeshua, Nehemiah, Azariah, Raamiah, Nahamani, Mordecai,
Bilshan, Mispereth, Bigvai, Nehum and Baanah):
\b
\pm The list of the men of Israel:
\b
\lim1
\v 8 the descendants of Parosh - \litl 2,172\litl*
\lim1
\v 9 of Shephatiah - \litl 372\litl*
\lim1
\v 10 of Arah - \litl 652\litl*
\lim1
\v 11 of Pahath-Moab (through the line of Jeshua and Joab) - \litl 2,818\litl*
\lim1
\v 12 of Elam - \litl 1,254\litl*
\lim1
\v 13 of Zattu - \litl 845\litl*
\lim1
\v 14 of Zaccai - \litl 760\litl*`;
const lik_liv = String.raw`\id GEN
\c 38
\s1 Administration of the Tribes of Israel
\lh
\v 16-22 This is the list of the administrators of the tribes of Israel:
\li1 \lik Reuben\lik* \liv1 Eliezer son of Zichri\liv1*
\li1 \lik Simeon\lik* \liv1 Shephatiah son of Maacah\liv1*
\li1 \lik Levi\lik* \liv1 Hashabiah son of Kemuel\liv1*
\li1 \lik Aaron\lik* \liv1 Zadok\liv1*
\li1 \lik Judah\lik* \liv1 Elihu, one of King David's brothers\liv1*
\li1 \lik Issachar\lik* \liv1 Omri son of Michael\liv1*
\li1 \lik Zebulun\lik* \liv1 Ishmaiah son of Obadiah\liv1*
\li1 \lik Naphtali\lik* \liv1 Jeremoth son of Azriel\liv1*
\li1 \lik Ephraim\lik* \liv1 Hoshea son of Azaziah\liv1*
\li1 \lik West Manasseh\lik* \liv1 Joel son of Pedaiah\liv1*
\li1 \lik East Manasseh\lik* \liv1 Iddo son of Zechariah\liv1*
\li1 \lik Benjamin\lik* \liv1 Jaasiel son of Abner\liv1*
\li1 \lik Dan\lik* \liv1 Azarel son of Jeroham\liv1*
\lf This was the list of the administrators of the tribes of Israel.`;
const table_with_header = String.raw`\id GEN
\c 1
\p
\v 12-83 They presented their offerings in the following order:
\tr \th1 Day \th2 Tribe \th3 Leader
\tr \tcr1 1st \tc2 Judah \tc3 Nahshon son of Amminadab
\tr \tcr1 2nd \tc2 Issachar \tc3 Nethanel son of Zuar
\tr \tcr1 3rd \tc2 Zebulun \tc3 Eliab son of Helon
\tr \tcr1 4th \tc2 Reuben \tc3 Elizur son of Shedeur
\tr \tcr1 5th \tc2 Simeon \tc3 Shelumiel son of Zurishaddai`;
const table_with_merged_cells = String.raw`\id GEN
\c 1
\p
\v 10-16 On the south, those under the banner of the division of Reuben shall camp in
their groups, under their leaders, as follows:
\tr \th1 Tribe \th2 Leader \thr3 Number
\tr \tc1 Reuben \tc2 Elizur son of Shedeur \tcr3 46,500
\tr \tc1 Simeon \tc2 Shelumiel son of Zurishaddai \tcr3 59,300
\tr \tc1 Gad \tc2 Eliasaph son of Deuel \tcr3 45,650
\tr \tcr1-2 Total: \tcr3 151,450`;
const a_basic_footnote_usage = String.raw`\id GEN
\c 1
\s1 The Preaching of John the Baptist
\r (Matthew 3.1-12; Luke 3.1-18; John 1.19-28)
\p
\v 1 This is the Good News about Jesus Christ, the Son of God. \f + \fr 1.1: \ft Some
manuscripts do not have \fq the Son of God.\f*`;
const another_footnote = String.raw`\id GEN
\c 1
\p
\v 20 Adam \f + \fr 3.20: \fk Adam: \ft This name in Hebrew means “all human beings.”\f*
named his wife Eve, \f + \fr 3.20: \fk Eve: \ft This name sounds similar to the Hebrew
word for “living,” which is rendered in this context as “human beings.”\f* because she
was the mother of all human beings.`;
const footnotes_with_unusual_callers = String.raw`\id GEN
\c 1
\p
\v 3 Él es el resplandor glorioso de Dios,\f c \fr 1.3: \fk Resplandor: \ft Cf.
Jn 1.4-9,14\fdc ; también Sab 7.25-26, donde algo parecido se dice de la sabiduría.\f*
la imagen misma de lo que Dios es y el que sostiene todas las cosas con su palabra
poderosa. Después de limpiarnos de nuestros pecados, se ha sentado en el cielo, a la
derecha del trono de Dios,
\v 4 y ha llegado a ser superior a los ángeles, pues ha recibido en herencia un título
mucho más importante que el de ellos. \f ⸀ \fr 28,14 \ft υπο \fw B D 0148. 892\f*
\v 3 \f ° \fr 4,1 \fw B Δ 700\f*`;
const footnote_in_new_line = String.raw`\id GEN
\c 1
\p
\v 27 Can any of you live a bit longer
\f + \fr 6.27: \fq live a bit longer; \ft or \fq grow a bit taller.\f* by worrying about it?`;
const a_basic_cross_ref = String.raw`\id GEN
\c 1
\p
\v 22 But when Joseph heard that Archelaus had succeeded his father Herod as king of
Judea, he was afraid to go there. He was given more instructions in a dream, so he went
to the province of Galilee
\v 23 \x - \xo 2.23: \xt Mrk 1.24; Luk 2.39; Jhn 1.45.\x* and made his home in a town
named Nazareth. And so what the prophets had said came true: “He will be called a
Nazarene.”`;
const a_not_so_basic_crossref = String.raw`\id GEN
\c 1
\p
\v 18 “Why do you call me good?” Jesus asked him. “No one is good except God alone.
\v 19 \x - \xo 10.19: a \xt Exo 20.13; Deu 5.17; \xo b \xt Exo 20.14; Deu 5.18; \xo c
\xt Exo 20.15; Deu 5.19; \xo d \xt Exo 20.16; Deu 5.20; \xo e \xt Exo 20.12; Deu 5.16.\x*
You know the commandments: ‘Do not commit murder; do not commit adultery; do not steal;
do not accuse anyone falsely; do not cheat; respect your father and your mother.’”`;
const xt_in_cd = String.raw`\id GEN
\c 2
\cd \xt 1|GEN 2:1\xt* Бог благословляет седьмой день; \xt 8|GEN 2:8\xt* человек в раю Едемском;
четыре реки; дерево познания добра и зла. \xt 18|GEN 2:18\xt* Человек дает названия животным.
\xt 21|GEN 2:21\xt* Создание женщины.
\p
\v 1 Так совершены небо и земля и все воинство их.
\p
\v 2 И совершил Бог к седьмому дню дела Свои, которые Он делал, и почил в день седьмой
от всех дел Своих, которые делал.`;
const cross_ref_in_s = String.raw`\id GEN
\c 3
\s1 The Preaching of John the Baptist\x - \xo 3.0 \xta Compare with \xt Mk 1.1-8;
Lk 3.1-18; \xta and \xt Jn 1.19-28 \xta parallel passages.\x*
\p
\v 1 At that time John the Baptist came to the desert of Judea and started preaching.`;
const another_cross_ref = String.raw`\id GEN
\c 1
\p
\v 1 \x - \xo 1:1 \xop Гл 1. (1)\xop* \xt 4 Царств. 14:25.\x*И биде слово Господне
към Иона, син Аматиев:
\v 2 \x - \xo 1:2 \xop (2)\xop* \xt Бит. 10:11. Иона 3:3.\x*„стани, иди в Ниневия,
град голям, и проповядвай в него, защото злодеянията му достигнаха до Мене“.
\v 3 И стана Иона да побегне в Тарсис от лицето Господне; дойде в Иопия и намери кораб,
който отиваше за Тарсис, плати за превоз и влезе в него, за да отплува с тях в Тарсис
от лицето Господне.
\v 4 \x - \xo 1:4 \xop (4)\xop* \xt Пс. 106:25.\x*Но Господ подигна в морето силен
вятър, и стана в морето голяма буря, и корабът насмалко оставаше да се разбие.
\v 5 \x - \xo 1:5 \xop (5)\xop* \xt 4 Царств. 17:29.\x*Уплашиха се корабниците; те
викаха всеки към своя бог и почнаха да хвърлят в морето товара от кораба, за да му
олекне от него; а Иона бе слязъл в дъното на кораба, бе легнал и дълбоко заспал.`;
const more_cross_refs = String.raw`\id GEN
\c 1
\q1
\v 3 Our God is in heaven;
\q2 he does whatever he wishes.
\q1
\v 4 \x - \xo 115.4-8: \xt Ps 135.15-18; \xdc Ltj Jr 4-73; \xt Rev 9.20.\x* Their
gods are made of silver and gold,
\q2 formed by human hands.
\p
\v 51-52 \x - \xo 15.51,52: \xdc 2Es 6.23; \xt 1Th 4.15-17.\x* Listen to this secret
truth: we shall not all die, but when the last trumpet sounds, we shall all be changed
in an instant, as quickly as the blinking of an eye. For when the trumpet sounds, the
dead will be raised, never to die again, and we shall all be changed.`;
const rq = String.raw`\id GEN
\c 1
\p
\v 4 The Son was made greater than the angels, just as the name that God gave him is greater
than theirs.
\v 5 For God never said to any of his angels,
\q1 "You are my Son;
\q2 today I have become your Father."
\rq Psa 2.7\rq*
\b
\m Nor did God say about any angel,
\q1 "I will be his Father,
\q2 and he will be my Son."
\rq 2Sa 7.14; 1Ch 17.13\rq*`;
const simple_character_markups = String.raw`\id GEN
\c 1
\p
\v 29 И нарек ему имя: Ной, сказав: он утешит нас в работе нашей и в трудах рук
наших при \add возделывании\add* земли, которую проклял Господь.
\v 15 Tell the Israelites that I, the \nd Lord\nd*, the God of their ancestors,
\c 2
\p
\v 1 This is the Good News about Jesus Christ, the Son of God.
\v 2 It began as the prophet Isaiah had written:
\q1 \qt “God said, ‘I will send my messenger ahead of you\qt*
\q2 \qt to open the way for you.’\qt*
\q1
\v 3 \qt Someone is shouting in the desert,\qt*
\q2 \qt ‘Get the road ready for the Lord;\qt*
\q2 \qt make a straight path for him to travel!’ ”\qt*
\p
\v 18 With my own hand I write this: \sig Greetings from Paul\sig*. Do not forget
my chains!
\cls May God's grace be with you.
\v 7 Et aux jours d'Artaxerxès, Bishlam, Mitredath, Tabéel et le reste de leurs
collègues écrivirent à Artaxerxès, roi de Perse. Le texte de la lettre fut écrit en
araméen, traduit en araméen.
\p
\v 8 \sls Rehoum, chancelier, et Shimshaï, secrétaire, écrivirent au roi Artaxerxès
la lettre suivante concernant Jérusalem, savoir:\sls*
\v 9 \sls «Rehoum, chancelier, Shimshaï, secrétaire, et le reste de leurs collègues,
ceux de Dîn, d'Apharsatak, de Tarpel, d'Apharas, d'Erek, de Babylone, de Suse, de Déha,
d'Elam,\sls*
\s1 The Death of Jesus
\r (Mark 15.33-41; Luke 23.44-49; John 19.28-30)
\p
\v 45 At noon the whole country was covered with darkness, which lasted for three hours.
\v 46 At about three o'clock Jesus cried out with a loud shout, \tl “Eli, Eli, lema
sabachthani?”\tl* which means, “My God, my God, why did you abandon me?”`;
const in_introduction_section = String.raw`\id GEN
\mt1 THE ACTS
\mt2 of the Apostles
\is Introduction
\ip \bk The Acts of the Apostles\bk* is a continuation of \bk The Gospel according
to Luke\bk* Its chief purpose is to tell how Jesus' early followers, led by the Holy
Spirit, spread the Good News about him “in Jerusalem, in all of Judea and Samaria,
and to the ends of the earth” (1.8).
\c 1
\p
\v 29 И нарек ему`;
const in_corss_ref = String.raw`\id GEN
\c 1
\q1
\v 3 Our God is in heaven;
\q2 he does whatever he wishes.
\q1
\v 4 \x - \xo 115.4-8: \xt Ps 135.15-18; \+dc Ltj Jr 4-73; \+dc*\xt Rev 9.20.\x* Their
gods are made of silver and gold,
\q2 formed by human hands.
\p
\v 51-52 \x - \xo 15.51,52: \xt \+dc 2Es 6.23; \+dc*1Th 4.15-17.\x* Listen to this secret
truth: we shall not all die, but when the last trumpet sounds, we shall all be changed
in an instant, as quickly as the blinking of an eye. For when the trumpet sounds, the
dead will be raised, never to die again, and we shall all be changed.`;
const figure = String.raw`\id GEN
\c 1
\p
\v 16 As Jesus walked along the shore of Lake Galilee, he saw two fishermen,
Simon and his brother Andrew, catching fish with a net.
\v 17 Jesus said to them, “Come with me, and I will teach you to catch people.”
\v 18 At once they left their nets and went with him. \fig At once they left
their nets.|src="avnt016.jpg" size="span" ref="1.18"\fig*
\v 30 Simon's mother-in-law was sick in bed with a fever, and as soon as Jesus
arrived, he was told about her.
\v 31 He went to her, took her by the hand, and helped her up. The fever left
her, and she began to wait on them. \fig Took her by the hand, and...the fever
left her.|src="avnt017.tif" size="col" ref="1.31"\fig*
\p
\v 32 After the sun had set and evening had come`;
const with_attributes = String.raw`\id GEN
\c 1
\p \v 1 まだ\rb 何|なに\rb*もなかった\rb 時|とき\rb*、\rb 神|かみ\rb*は
\rb 天|てん\rb*と\rb 地|ち\rb*を\rb 造|つく\rb*りました。
\v 2 \rb 地|ち\rb*は\rb 形|かたち\rb*も\rb 定|さだ\rb*まらず、\rb 闇|やみ\rb*に
\rb 包|つつ\rb*まれた\rb 水|みず\rb*の\rb 上|うえ\rb*を、さらに\rb 神|かみ\rb*の
\rb 霊|れい\rb*が\rb 覆|おお\rb*っていました。
\p
\v 3 \w gracious|lemma="grace"\w*
\w gracious|grace\w*
\w gracious|lemma="grace" strong="G5485"\w*
\w gracious|strong="G5485"\w*
\w gracious|strong="H1234,G5485"\w*
\w gracious|lemma="grace" srcloc="gnt5:51.1.2.1"\w*
\w most holy|strong="H6944,H6944"\w*`;
const qt_milestones_inline = String.raw`\id MAT some other info of file
\c 1
\p 
\v 11 Jesus stood before the Roman governor, who questioned him. 
\qt-s |who="Pilate"\* “Are
you the king of the Jews?”\qt-e\* he asked.
\p \qt-s |who="Jesus"\*“So you say,”\qt-e\* answered Jesus.
\v 12 But he said nothing in response to the accusations of the chief priests and elders.
\p
\v 13 So Pilate said to him, \qt-s |who="Pilate"\*“Don't you hear all these things they
accuse you of?”\qt-e\*
\p
\v 14 But Jesus refused to answer a single word, with the result that the Governor was greatly
surprised.`;
const qt_milestone_numbered = String.raw`\id ACT
\c 1
\p
\v 22 Paul stood up in front of the city council and said, \qt1-s |sid="qt1_ACT_17:22"
who="Paul"\*“I see that in every way you Athenians are very religious.
\v 23 For as I...
\v 28 as someone has said,
\q1 \qt2-s |who="someone"\*‘In him we live and move and exist.’\qt2-e\*
\b
\m It is as some of your poets have said,
\q1 \qt2-s |who="some poets"\*‘We too are his children.’\qt2-e\*
\b
\m
\v 29 Since we ...
\v 31 For he has fixed a day in which he will judge the whole world with justice by means of
a man he has chosen. He has given proof of this to everyone by raising that man from death!”
\qt1-e |eid="qt1_ACT_17:22"\*`;
const ts_milestone_wo_attributes = String.raw`\id JUD
\c 1
\ts\*
\p
\v 5 Now I wish to remind you, although you know everything, that the Lord once saved a
people out of the land of Egypt, but that afterward he destroyed those who did not believe.
\v 6 And angels who did not keep to their own principality, but left their proper dwelling
place—God has kept them in everlasting chains in darkness for the judgment of the
great day.
\ts\*
\v 7 It is just like Sodom and Gomorrah and the cities around them, which in a similar way
gave themselves over to fornication and pursued unnatural desires.They were given as
  examples of those who suffer the punishment of eternal fire.
\v 8 Yet in the same way these also pollute their bodies in their dreams, and they reject
authority, and they say evil things about the glorious ones.
\ts\* `;
const ts_milestone_w_attributes = String.raw`\id JUD
\c 1
\p
\v 1 some prior text
\ts - s | sid="ts_JUD_5-6"\*
\p
\v 5 Now I wish to remind you, although you know everything, that the Lord once saved a
people out of the land of Egypt, but that afterward he destroyed those who did not believe.
\v 6 And angels who did not keep to their own principality, but left their proper dwelling
place—God has kept them in everlasting chains in darkness for the judgment of the
great day.
\ts - e | eid="ts_JUD_5-6"\*
\ts - s | sid="ts_JUD_7-8"\*
\v 7 It is just like Sodom and Gomorrah and the cities around them, which in a similar way
gave themselves over to fornication and pursued unnatural desires.They were given as
  examples of those who suffer the punishment of eternal fire.
\v 8 Yet in the same way these also pollute their bodies in their dreams, and they reject
authority, and they say evil things about the glorious ones.
\ts - e | eid="ts_JUD_7-8"\* `;
const znamespace = String.raw`\id GEN
\zhead some text
\c 1
\p
\z - empty
\v 1 text \zinline inner text \zinline *
\v 2 text
\v 3 text \zattrib inner text | x - key="val" \zattrib *
\v 4 text`;
const esb_esbe = String.raw`\id GEN
\c 1
\p
\v 18 At once they left their nets and went with him.
\esb
\ms Fish and Fishing
\p In Jesus' time, fishing took place mostly on lake Galilee, because Jewish people
could not use many of the harbors along the coast of the Mediterranean Sea, since these
harbors were often controlled by unfriendly neighbors.The most common fish in the Lake
of Galilee were carp and catfish.The Law of Moses allowed people to eat any fish with
fins and scales, but since catfish lack scales(as do eels and sharks) they were not to
be eaten(\xt Lev 11.9 - 12\xt *).Fish were also probably brought from Tyre and Sidon,
  where they were dried and salted.
\p Among early Christians, the fish was a favorite image for Jesus, because the Greek
word for fish(\tl ichthus\tl *) consists of the first letters of the Greek words that
tell who Jesus is: \fig Ihsous Christos Theou Uios Swthr | alt="Christian Fish Image"
src = "christfish.jpg" size = "col" ref = "1.18"\fig *
\esbe
\p
\v 19 He went a little farther on and saw two other brothers, James and John,
  the sons of Zebedee.`;
const cat = String.raw`\id GEN
\c 1
\p
\v 18 At once they left their nets and went with him.
\esb \cat History\cat *
\ms Fish and Fishing
\p In Jesus' time, fishing took place mostly on lake Galilee, because Jewish people
could not use many of the harbors along the coast of the Mediterranean Sea, since these
harbors were often controlled by unfriendly neighbors.The most common fish in the Lake
of Galilee were carp and catfish.The Law of Moses allowed people to eat any fish with
fins and scales, but since catfish lack scales(as do eels and sharks) they were not to
be eaten(\xt Lev 11.9 - 12\xt *).Fish were also probably brought from Tyre and Sidon,
  where they were dried and salted.
\p Among early Christians, the fish was a favorite image for Jesus, because the Greek
word for fish(\tl ichthus\tl *) consists of the first letters of the Greek words that
tell who Jesus is: \fig Ihsous Christos Theou Uios Swthr | alt="Christian Fish Image"
src = "christfish.jpg" size = "col" ref = "1.18"\fig *
\esbe
\p
\v 19 He went a little farther on and saw two other brothers, James and John,
  the sons of Zebedee.`;

module.exports = {
  pc, nb, pi_mi, pmo_pm_and_pmc, cls, pr, po, simple_p, m, headers_and_titles, ca_cp_va_vp_markers_occuring_within_content, va_vp_markers, verse_number_patterns,
  q, qr, qc, qs, qa, qac, qm, qd, b, list, only_li, lim_litl, lik_liv, table_with_header, table_with_merged_cells, a_basic_footnote_usage, another_footnote, footnotes_with_unusual_callers, footnote_in_new_line, a_basic_cross_ref, a_not_so_basic_crossref, xt_in_cd, cross_ref_in_s, another_cross_ref, more_cross_refs, rq, simple_character_markups, in_introduction_section, in_corss_ref, figure, with_attributes, qt_milestones_inline, qt_milestone_numbered
  , rem_under_one_id, cl_ca_cp_markers, cl_markers, id_c_v_markers, intro_markers_set_3, intro_markers_set_2, intro_markers_set_1, sts_and_rem_maker_together_in_header_section
  , sts_between_toc_markers_and_h, rem_under_one_h_marker, rem_between_toc_markers_and_h, sts_under_one_id, sts_under_one_h_marker, cat
};

