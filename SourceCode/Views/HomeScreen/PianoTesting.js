// import React from 'react';
// import { ImageBackground, StyleSheet, Text, ActivityIndicator, View, TouchableOpacity } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import Sound from 'react-native-sound';
// import { Colors } from '../../Assets/ThemeColors/ThemeColors';
// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
// import P_WhiteNote1 from '../../Assets/PianoSounds/aa.wav'
// import P_WhiteNote2 from '../../Assets/PianoSounds/bb.wav'
// import P_WhiteNote3 from '../../Assets/PianoSounds/cc.mp3'
// import P_WhiteNote4 from '../../Assets/PianoSounds/dd.mp3'
// import P_WhiteNote5 from '../../Assets/PianoSounds/ee.mp3'
// import P_WhiteNote6 from '../../Assets/PianoSounds/ff.mp3'
// import P_WhiteNote7 from '../../Assets/PianoSounds/gg.mp3'
// import P_BlackNote1 from '../../Assets/PianoSounds/as.mp3'
// import P_BlackNote2 from '../../Assets/PianoSounds/cs.mp3'
// import P_BlackNote3 from '../../Assets/PianoSounds/ds.mp3'
// import P_BlackNote4 from '../../Assets/PianoSounds/fs.mp3'
// import P_BlackNote5 from '../../Assets/PianoSounds/gs.mp3'

// export default class PianoTesting extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             AdsControlList: this.props.route.params?.AdsControllerList ?? "",
//         }

//         this.sound = {};
//         const soundList = [P_WhiteNote3, P_BlackNote2, P_WhiteNote4, P_BlackNote3, P_WhiteNote5,
//             P_WhiteNote6, P_BlackNote4, P_WhiteNote7, P_BlackNote5, P_WhiteNote1, P_BlackNote1, P_WhiteNote2]
//         soundList.forEach(note => {
//             this.sound[note] = new Sound(note, Sound.MAIN_BUNDLE, error => {
//                 if (error) {
//                     console.log("failed to load the sound.", error);
//                 }
//             })
//         });
//     }


//     pianoFixWhiteTab(EndBorder) {
//         return (
//             <View style={{
//                 width: wp(13),
//                 height: hp(13),
//                 backgroundColor: 'white',
//                 borderTopWidth: 1,
//                 // borderStartWidth: 1,
//                 borderEndWidth: EndBorder,
//                 borderTopColor: 'black',
//                 borderBottomColor: 'black',
//                 borderEndColor: 'black',
//             }}>
//             </View>
//         )
//     }
//     pianoSoundWhiteTab(OnAction) {
//         return (
//             <TouchableOpacity
//                 onPress={() => OnAction()}
//                 style={{
//                     width: wp(13),
//                     height: hp(13),
//                     backgroundColor: 'white',
//                     borderEndWidth: wp(0.4),
//                     borderBottomWidth: 1,
//                     borderBottomColor: 'black',
//                     borderEndColor: 'black',
//                 }}>
//             </TouchableOpacity>
//         )
//     }
//     pianoSoundBlackTab(MarginLeft, OnAction) {
//         return (
//             <TouchableOpacity
//                 onPress={() => OnAction()}
//                 activeOpacity={0.5}
//                 style={{
//                     width: wp(9),
//                     height: hp(13),
//                     backgroundColor: 'black',
//                     marginLeft: MarginLeft,
//                 }}>
//             </TouchableOpacity>
//         )
//     }
//     stroke(note) {
//         this.sound[note].play();
//     }



//     render() {
//         let { AdsControlList } = this.state
//         return (
//             <View style={{
//                 flex: 1,
//             }}>

//                 <ImageBackground
//                     source={require('../../Assets/Images/SBG7.png')}
//                     style={{
//                         width: wp(100),
//                         height: hp(104),
//                         alignItems: 'center',
//                     }}>

//                     {/* =========================================================== */}
//                     <View style={{
//                         flexDirection: "column",
//                         backgroundColor: Colors.blackHexColor,
//                         marginTop: hp(5),
//                         paddingVertical: hp(2),
//                         width: wp(100),
//                         paddingHorizontal: wp(4),
//                         alignItems: 'center',
//                     }}>
//                         <View style={{
//                             flexDirection: "row",
//                             // backgroundColor: 'plum',
//                         }}>
//                             <View style={{
//                                 width: wp(13),
//                                 height: hp(13),
//                                 backgroundColor: 'white',
//                                 borderTopWidth: 1,
//                                 borderStartWidth: 1,
//                                 borderTopColor: 'black',
//                                 borderBottomColor: 'black',
//                             }}>
//                             </View>

//                             {this.pianoFixWhiteTab(0)}
//                             {this.pianoFixWhiteTab(wp(0.4))}
//                             {this.pianoFixWhiteTab(0)}
//                             {this.pianoFixWhiteTab(0)}
//                             {this.pianoFixWhiteTab(0)}
//                             {this.pianoFixWhiteTab(wp(0.4))}

//                             {/* ============= All Black working keys ============ */}

//                             <View style={{
//                                 flexDirection: 'row',
//                                 position: 'absolute',
//                                 width: wp(80),
//                                 height: hp(15)
//                             }}>
//                                 {this.pianoSoundBlackTab(wp(8), () => this.stroke(P_BlackNote2))}
//                                 {this.pianoSoundBlackTab(wp(4.5),() => this.stroke(P_BlackNote3))}
//                                 {this.pianoSoundBlackTab(wp(16),() => this.stroke(P_BlackNote4))}
//                                 {this.pianoSoundBlackTab(wp(4.5),() => this.stroke(P_BlackNote5))}
//                                 {this.pianoSoundBlackTab(wp(4),() => this.stroke(P_BlackNote1))}
//                             </View>

//                         </View>

//                         {/* ==========WHite working keys ========== */}
//                         <View style={{
//                             flexDirection: "row",
//                             // backgroundColor: 'powderblue',
//                         }}>
//                             <TouchableOpacity
//                                 onPress={() => { this.stroke(P_WhiteNote3) }}
//                                 style={{
//                                     width: wp(13),
//                                     height: hp(13),
//                                     backgroundColor: 'white',
//                                     borderEndWidth: wp(0.4),
//                                     borderStartWidth: 1,
//                                     borderBottomWidth: 1,
//                                     borderBottomColor: 'black',
//                                     borderEndColor: 'black',
//                                 }}>

//                             </TouchableOpacity>
//                             {this.pianoSoundWhiteTab(() => this.stroke(P_WhiteNote4))}
//                             {this.pianoSoundWhiteTab(() => this.stroke(P_WhiteNote5))}
//                             {this.pianoSoundWhiteTab(() => this.stroke(P_WhiteNote6))}
//                             {this.pianoSoundWhiteTab(() => this.stroke(P_WhiteNote7))}
//                             {this.pianoSoundWhiteTab(() => this.stroke(P_WhiteNote1))}
//                             {this.pianoSoundWhiteTab(() => this.stroke(P_WhiteNote2))}

//                         </View>

//                     </View>




//                 </ImageBackground>
//             </View>
//         );
//     }
// }
