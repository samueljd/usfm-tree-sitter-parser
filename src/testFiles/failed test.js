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
