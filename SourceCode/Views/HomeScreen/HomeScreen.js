import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { Colors } from '../Colors/Colors';
import { Colors } from '../../Assets/ThemeColors/ThemeColors';
import firestore from '@react-native-firebase/firestore';
import { InterstitialAd, TestIds, AdEventType, BannerAd, BannerAdSize, } from 'react-native-google-mobile-ads';

let interstitial

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeAd_loaded: false,
            adsControllerList: [],
            hasAd: false
        };

        this.musicInstrument = this.musicInstrument.bind(this);
    }

    componentDidMount() {
        this.props.navigation.addListener("focus", () => {
            this.setState({
                homeAd_loaded: false,
            })
            this.adsControllerWithFireBase();
        });

    }

    adsControllerWithFireBase() {
        firestore()
            .collection('AdsController')
            .onSnapshot(this.adsCollection)
    }
    adsCollection = (querySnapshot) => {
        let tempAdsController = []
        querySnapshot.forEach(documentSnapshot => {
            tempAdsController.push(documentSnapshot.data())
        });

        this.setState({ adsControllerList: tempAdsController },
            () => { this.googleAdmob(); })
        console.log('============ Ads Controller LIST========== >>', this.state.adsControllerList)
    }
    googleAdmob(showAd) {
        if (this.state.adsControllerList[0]?.HomePopUpAd == true) {
            // const adUnitId = 'ca-app-pub-3940256099942544/1033173712';
            let adUnitId = this.state.adsControllerList[0]?.HomePopUpAd_ID
            console.log('====== AD UNIT ID====================>>>> ', adUnitId)
            interstitial = InterstitialAd.createForAdRequest(adUnitId, {
                requestNonPersonalizedAdsOnly: true,
            });
            interstitial.load()

            interstitial.addAdEventListener(AdEventType.LOADED,
                () => {
                    this.setState({ homeAd_loaded: true })
                    console.log('======>> Home POP Up AD LOADED = TRUE')
                })
        }
    }

    musicInstrument(props) {

        // console.log('===============================>>>>>>>>>>>>>> ',this)
        // let { homeAd_loaded } = this.state
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                    if (this.state.homeAd_loaded == true) {
                        interstitial.show();
                        props.ScreenNavigation()
                    }
                    else {
                        props.ScreenNavigation()
                    }

                }}
                style={{
                    width: wp(90),
                    height: hp(25),
                    backgroundColor: props.BgColor,
                    borderRadius: hp(1.5),
                    marginBottom: hp(2),
                }}>
                <Image
                    source={props.ImgPath}
                    resizeMode={props.ImgSizeMode}
                    style={{
                        // height: hp(25),
                        // width: hp(25),
                        height: props.ImgHeight,
                        width: props.ImgWidth,
                        marginLeft: props.MarginleftforImg,
                        // backgroundColor: 'plum',
                    }}>
                </Image>

                <Text style={{
                    fontSize: hp(4.2),
                    color: props.TextColor,
                    fontFamily: "Acme-Regular",
                    textAlign: 'center',
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    right: wp(10),
                    top: hp(9),
                    // fontFamily: "Play-Bold",
                }}>{props.Text}</Text>
            </TouchableOpacity>
        )
    }

    adClicked() {
        console.log('=====HOME PAGE banner ad clicked ======');
    }
    adReceived() {
        console.log('=====HOME banner ad Loaded=======');
        this.setState({
            ...this.state,
            hasAd: true
        });
    }

    render() {
        let { adsControllerList } = this.state
        return (
            <View style={{
                flex: 1,
            }}>

                <StatusBar backgroundColor={'transparent'} translucent barStyle='dark-content' />

                <Text style={{
                    fontSize: hp(5),
                    color: Colors.primary_color,
                    marginTop: hp(5),
                    marginHorizontal: wp(5),
                    fontFamily: "Acme-Regular",
                    // fontFamily: "Play-Bold",
                    // fontFamily: "JosefinSans-Regular",
                    // fontFamily: "JosefinSans-Medium",
                    // fontFamily: "NerkoOne-Regular",
                    // fontFamily:"PatrickHand-Regular",
                    // fontFamily:"RubikMicrobe-Regular",
                    // fontFamily:"ChakraPetch-Medium",
                }}>Lets play a Music {"\n"}with us.</Text>

                <View style={{
                    marginTop: hp(2),
                    marginHorizontal: wp(5),
                    flex: 1
                }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>

                        {/* =============== Tab 1, Piano ============== */}
                        <this.musicInstrument
                            ScreenNavigation={() => this.props.navigation.navigate('PianoScreen', {
                                AdsControllerList: this.state.adsControllerList
                            })}
                            BgColor={Colors.secondary_color}
                            ImgPath={require('../../Assets/Images/piano.png')}
                            ImgSizeMode={'contain'}
                            ImgHeight={hp(25)}
                            ImgWidth={hp(25)}
                            MarginleftforImg={wp(2)}
                            Text={'Piano'}
                            TextColor={Colors.white_text}
                        />

                        {/* =============== Tab 2, Xylophone ============== */}
                        <this.musicInstrument
                            ScreenNavigation={() => this.props.navigation.navigate('XylophoneScreen', {
                                AdsControllerList: this.state.adsControllerList
                            })}
                            BgColor={Colors.primary_color}
                            ImgPath={require('../../Assets/Images/tuntun.png')}
                            ImgSizeMode={'contain'}
                            ImgHeight={hp(25)}
                            ImgWidth={hp(25)}
                            MarginleftforImg={wp(-2)}
                            Text={'Xylo\nphone'}
                            TextColor={Colors.white_text}
                        />

                        {/* =============== Tab 3, Drum ============== */}
                        <this.musicInstrument
                            ScreenNavigation={() => this.props.navigation.navigate('DrumScreen', {
                                AdsControllerList: this.state.adsControllerList
                            })}
                            BgColor={Colors.light_green}
                            ImgPath={require('../../Assets/Images/drum2.png')}
                            ImgSizeMode={'contain'}
                            ImgHeight={hp(25)}
                            ImgWidth={hp(25)}
                            MarginleftforImg={wp(0)}
                            Text={'Drum'}
                            TextColor={Colors.white_text}
                        />

                        {/* ========== HOME PAGE BANNER AD ========= */}
                        {this.state.adsControllerList[0]?.HomeBanAd &&
                            <View style={{
                                backgroundColor: Colors.blackHexColor,
                                alignItems: 'center',
                                marginBottom: !this.state.hasAd ? 0 : hp(2),
                                borderRadius: hp(1.5),
                                height: !this.state.hasAd ? 0 : hp(33),
                                // backgroundColor: 'plum',
                            }}>
                                <BannerAd
                                    size={BannerAdSize.MEDIUM_RECTANGLE}
                                    unitId={this.state.adsControllerList[0]?.HomeBanAd_ID}
                                    onAdOpened={this.adClicked.bind(this)}
                                    onAdLoaded={this.adReceived.bind(this)}
                                />
                            </View>
                        }

                        {/* =============== Tab 4, Alphabets ============== */}
                        <this.musicInstrument
                            ScreenNavigation={() => this.props.navigation.navigate('AlphabetScreen', {
                                AdsControllerList: this.state.adsControllerList
                            })}
                            BgColor={Colors.ternary_color}
                            ImgPath={require('../../Assets/Images/alphabet.png')}
                            ImgSizeMode={'contain'}
                            ImgHeight={hp(20)}
                            ImgWidth={hp(20)}
                            MarginleftforImg={wp(1)}
                            Text={'Alphabets'}
                            TextColor={Colors.white_text}
                        />

                        {/* =============== Tab 5, Counting ============== */}
                        <this.musicInstrument
                            ScreenNavigation={() => this.props.navigation.navigate('CountingScreen', {
                                AdsControllerList: this.state.adsControllerList
                            })}
                            BgColor={Colors.light_purple}
                            ImgPath={require('../../Assets/Images/counting.png')}
                            ImgSizeMode={'contain'}
                            ImgHeight={hp(22)}
                            ImgWidth={hp(22)}
                            MarginleftforImg={wp(0)}
                            Text={'Counting'}
                            TextColor={Colors.white_text}
                        />

                    </ScrollView>


                </View>

            </View>
        );
    }
}
