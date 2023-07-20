import React, { Component } from 'react';
import { View, Text, ImageBackground, Image,ActivityIndicator, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/ThemeColors/ThemeColors';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import X_Tab1 from '../../Assets/XyloNotes/note1.wav'
import X_Tab2 from '../../Assets/XyloNotes/note2.wav'
import X_Tab3 from '../../Assets/XyloNotes/note3.wav'
import X_Tab4 from '../../Assets/XyloNotes/note4.wav'
import X_Tab5 from '../../Assets/XyloNotes/note5.wav'
import X_Tab6 from '../../Assets/XyloNotes/note6.wav'

export default class XylophoneScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AdsControlList: this.props.route.params?.AdsControllerList ?? "",
            hasAd: false
        }

        this.sound = {};
        const soundList = [X_Tab4, X_Tab5, X_Tab6, X_Tab1, X_Tab2, X_Tab3]
        soundList.forEach(note => {
            this.sound[note] = new Sound(note, Sound.MAIN_BUNDLE, error => {
                if (error) {
                    console.log("failed to load the sound.", error);
                }
            })
        });
    }

    xylophoneTab = (props) => {
        return (
            <TouchableOpacity
                onPress={() => { props.Tab_Note() }}
                activeOpacity={0.5}
                style={{
                    width: props.Width,
                    height: props.Height,
                    backgroundColor: props.BgColor,
                    borderRadius: hp(1.5),
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: wp(4),
                    marginBottom: hp(1.5),
                }}>
                <View style={{
                    width: hp(1.5),
                    height: hp(1.5),
                    backgroundColor: Colors.white,
                    borderRadius: hp(2)
                }}></View>

                <View style={{
                    width: hp(1.5),
                    height: hp(1.5),
                    backgroundColor: Colors.white,
                    borderRadius: hp(2)
                }}></View>

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
        console.log('=====XYLOPHONE banner ad clicked ======');
    }
    adReceived() {
        console.log('=====XYLOPHONE banner ad received=======');
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
                    source={require('../../Assets/Images/SBG4.png')}
                    style={{
                        width: wp(100),
                        height: hp(104),
                        alignItems: 'center',
                    }}>

                    <Text style={{
                        fontSize: hp(6),
                        color: Colors.white,
                        marginTop: hp(10),
                        // fontWeight: '600'
                        fontFamily: "Acme-Regular",
                    }}>Xylophone</Text>

                    {/* ================ XyloPhone Tabs =============== */}
                    <View style={{
                        alignItems: 'center',
                        marginTop: hp(7),
                    }}>

                        {/* ============ Tab 1, Xylophone ============ */}

                        <this.xylophoneTab
                            Tab_Note={() => this.stroke(X_Tab4)}
                            Width={wp(35)}
                            Height={hp(6.3)}
                            BgColor={Colors.light_purple}
                            Note={() => "note4"}
                        />

                        {/* ============ Tab 2, Xylophone ============ */}

                        <this.xylophoneTab
                            Tab_Note={() => this.stroke(X_Tab5)}
                            Width={wp(43)}
                            Height={hp(6.3)}
                            BgColor={Colors.ternary_color}
                        />

                        {/* ============ Tab 3, Xylophone ============ */}

                        <this.xylophoneTab
                            Tab_Note={() => this.stroke(X_Tab6)}
                            Width={wp(51)}
                            Height={hp(6.3)}
                            BgColor={Colors.orange}
                        />

                        {/* ============ Tab 4, Xylophone ============ */}

                        <this.xylophoneTab
                            Tab_Note={() => this.stroke(X_Tab1)}
                            Width={wp(59)}
                            Height={hp(6.3)}
                            BgColor={Colors.light_green}
                        />

                        {/* ============ Tab 5, Xylophone ============ */}
                        <this.xylophoneTab
                            Tab_Note={() => this.stroke(X_Tab2)}
                            Width={wp(66)}
                            Height={hp(6.3)}
                            BgColor={Colors.primary_color}
                        />

                        {/* ============ Tab 6, Xylophone ============ */}
                        <this.xylophoneTab
                            Tab_Note={() => this.stroke(X_Tab3)}
                            Width={wp(74)}
                            Height={hp(7)}
                            BgColor={Colors.secondary_color}
                        />


                    </View>

                    <Image source={require('../../Assets/Images/sticks.png')}
                        resizeMode='cover'
                        style={{
                            width: wp(50),
                            height: hp(20),
                            alignSelf: 'center',
                            // backgroundColor: 'plum',
                            marginTop: hp(4),
                        }}>
                    </Image>


                    {this.state.AdsControlList[0]?.XylophoneBanAd &&
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
                                    unitId={this.state.AdsControlList[0]?.XylophoneBanAd_ID}
                                    onAdOpened={this.adClicked.bind(this)}
                                    onAdLoaded={this.adReceived.bind(this)}
                                />
                        </View>}

                </ImageBackground>
            </View>
        );
    }
}
