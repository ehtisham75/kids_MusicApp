import React, { Component } from 'react';
import { View, Text, ImageBackground,ActivityIndicator, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/ThemeColors/ThemeColors';
import Sound from 'react-native-sound';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import AA from '../../Assets/AlphabetSounds/AA.mp3'
import BB from '../../Assets/AlphabetSounds/BB.mp3'
import CC from '../../Assets/AlphabetSounds/CC.mp3'
import DD from '../../Assets/AlphabetSounds/DD.mp3'
import EE from '../../Assets/AlphabetSounds/EE.mp3'
import FF from '../../Assets/AlphabetSounds/FF.mp3'
import GG from '../../Assets/AlphabetSounds/GG.mp3'
import HH from '../../Assets/AlphabetSounds/HH.mp3'
import II from '../../Assets/AlphabetSounds/II.mp3'
import JJ from '../../Assets/AlphabetSounds/JJ.mp3'
import KK from '../../Assets/AlphabetSounds/KK.mp3'
import LL from '../../Assets/AlphabetSounds/LL.mp3'
import MM from '../../Assets/AlphabetSounds/MM.mp3'
import NN from '../../Assets/AlphabetSounds/NN.mp3'
import OO from '../../Assets/AlphabetSounds/OO.mp3'
import PP from '../../Assets/AlphabetSounds/PP.mp3'
import QQ from '../../Assets/AlphabetSounds/QQ.mp3'
import RR from '../../Assets/AlphabetSounds/RR.mp3'
import SS from '../../Assets/AlphabetSounds/SS.mp3'
import TT from '../../Assets/AlphabetSounds/TT.mp3'
import UU from '../../Assets/AlphabetSounds/UU.mp3'
import VV from '../../Assets/AlphabetSounds/VV.mp3'
import WW from '../../Assets/AlphabetSounds/WW.mp3'
import XX from '../../Assets/AlphabetSounds/XX.mp3'
import YY from '../../Assets/AlphabetSounds/YY.mp3'
import ZZ from '../../Assets/AlphabetSounds/ZZ.mp3'

export default class AlphabetScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AdsControlList: this.props.route.params?.AdsControllerList ?? "",
            hasAd: false
        };

        this.sound = {};
        const soundList = [AA, BB, CC, DD, EE, FF, GG, HH, II, JJ, KK, LL, MM, NN, OO, PP, QQ, RR, SS, TT, UU, VV, WW, XX, YY, ZZ]
        soundList.forEach(note => {
            this.sound[note] = new Sound(note, Sound.MAIN_BUNDLE, error => {
                if (error) {
                    console.log("failed to load the sound.", error);
                }
            })
        });
    }

    Alphabets_(props) {
        return (
            <TouchableOpacity
                onPress={() => { props.Alphabet_Sound() }}
                activeOpacity={0.5}
                style={{
                    width: hp(8),
                    height: hp(8),
                    backgroundColor: props.BgColor,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{
                    fontSize: hp(5),
                    color: Colors.black_text,
                    // textAlign:'center'
                }}>
                    {props.Alphabet}
                </Text>

            </TouchableOpacity>
        )
    }

    stroke(note) {
        // this.sound[note].play();
        if (this.sound[note] == null) {
            this.sound[note].play();
            return
        }
        if(this.sound[note] != null){
            this.sound[note].stop()

            this.sound[note].play();
            return
        }
    }

    adClicked() {
        console.log('======= ALPHABETS banner ad clicked ======');
    }
    adReceived() {
        console.log('=======ALPHABETS banner ad received=======');
        this.setState({
            ...this.state,
            hasAd: true
        });
    }

    render() {
        let { AdsControlList } = this.state

        return (
            <View style={{
                flex: 1,
            }}>

                <ImageBackground
                    source={require('../../Assets/Images/SBG13.png')}
                    style={{
                        width: wp(100),
                        height: hp(104),
                        alignItems: 'center',
                    }}>

                    <Text style={{
                        fontSize: hp(6),
                        color: Colors.white,
                        marginTop: hp(8),
                        fontWeight: '600',
                        fontFamily: "Acme-Regular",
                    }}>Alphabets</Text>


                    {/* ============== Alphabets Pad ============= */}
                    <View style={{
                        marginTop: hp(3),
                        width: wp(100),
                        paddingHorizontal: wp(5),
                    }}>


                        {/* ========== 1st Row, a-b-c-d========= */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: hp(3),
                        }}>
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(AA)}
                                BgColor={Colors.primary_color}
                                Alphabet={"A"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(BB)}
                                BgColor={Colors.secondary_color}
                                Alphabet={"B"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(CC)}
                                BgColor={Colors.light_green}
                                Alphabet={"C"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(DD)}
                                BgColor={Colors.light_purple}
                                Alphabet={"D"}
                            />

                        </View>

                        {/* ========== 2nd Row, e-f-g-h ========= */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: hp(3),
                        }}>
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(EE)}
                                BgColor={Colors.primary_color}
                                Alphabet={"E"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(FF)}
                                BgColor={Colors.secondary_color}
                                Alphabet={"F"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(GG)}
                                BgColor={Colors.light_green}
                                Alphabet={"G"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(HH)}
                                BgColor={Colors.light_purple}
                                Alphabet={"H"}
                            />

                        </View>

                        {/* ========== 3rd Row, i-j-k-l ========= */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: hp(3),
                        }}>

                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(II)}
                                BgColor={Colors.primary_color}
                                Alphabet={"I"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(JJ)}
                                BgColor={Colors.secondary_color}
                                Alphabet={"J"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(KK)}
                                BgColor={Colors.light_green}
                                Alphabet={"K"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(LL)}
                                BgColor={Colors.light_purple}
                                Alphabet={"L"}
                            />

                        </View>

                        {/* ========== 4th Row, m-n-o-p ========= */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: hp(3),
                        }}>
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(MM)}
                                BgColor={Colors.primary_color}
                                Alphabet={"M"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(NN)}
                                BgColor={Colors.secondary_color}
                                Alphabet={"N"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(OO)}
                                BgColor={Colors.light_green}
                                Alphabet={"O"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(PP)}
                                BgColor={Colors.light_purple}
                                Alphabet={"P"}
                            />

                        </View>

                        {/* ========== 5th Row, q-r-s-t ========= */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: hp(3),
                        }}>
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(QQ)}
                                BgColor={Colors.primary_color}
                                Alphabet={"Q"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(RR)}
                                BgColor={Colors.secondary_color}
                                Alphabet={"R"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(SS)}
                                BgColor={Colors.light_green}
                                Alphabet={"S"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(TT)}
                                BgColor={Colors.light_purple}
                                Alphabet={"T"}
                            />

                        </View>

                        {/* ========== 6th Row, u-v-w-x ========= */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: hp(3),
                        }}>
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(UU)}
                                BgColor={Colors.primary_color}
                                Alphabet={"U"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(VV)}
                                BgColor={Colors.secondary_color}
                                Alphabet={"V"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(WW)}
                                BgColor={Colors.light_green}
                                Alphabet={"W"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(XX)}
                                BgColor={Colors.light_purple}
                                Alphabet={"X"}
                            />

                        </View>

                        {/* ========== 7th Row, y-z ========= */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            // marginBottom: hp(4),
                            // backgroundColor: 'plum',
                            paddingHorizontal: wp(15)
                        }}>

                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(YY)}
                                BgColor={Colors.primary_color}
                                Alphabet={"Y"}
                            />
                            <this.Alphabets_
                                Alphabet_Sound={() => this.stroke(ZZ)}
                                BgColor={Colors.light_purple}
                                Alphabet={"Z"}
                            />

                        </View>



                    </View>

                    {this.state.AdsControlList[0]?.AlphabetsBanAd &&
                        <View style={{
                            // backgroundColor: 'plum',
                            width: wp(100),
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: hp(1),
                            height: !this.state.hasAd ? 0 : hp(7)
                        }}>
                                <BannerAd
                                    size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                                    unitId={this.state.AdsControlList[0]?.AlphabetsBanAd_ID}
                                    onAdOpened={this.adClicked.bind(this)}
                                    onAdLoaded={this.adReceived.bind(this)}
                                />
                        </View>}
                </ImageBackground>
            </View>
        );
    }
}
