import React, { PureComponent } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import Avatar from '../../components/avatar';
import { H3, Normal, Tip } from '../../components/text';
import { Separator } from '../../components/separator';
import MenuRow from '../../components/menuRow';
import { color } from '../../utils/style';
import styles from './styles';

@connect(state => ({
  userInfo: state.common.userInfo,
}))
class Account extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: '账号',
    tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" size={32} color={tintColor} />,
    headerTitle: <H3 color={color.white}>账号</H3>,
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Player', { title: '播放器' })}>
        <Icon name="md-stats" size={30} color={color.white} />
      </TouchableOpacity>
    ),
    headerStyle: styles.navigationHeader,
  });
  render() {
    const { profile, level } = this.props.userInfo;
    const {
      avatarUrl, nickname, follows, followeds, eventCount,
    } = profile;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.infoContainer}>
          <Avatar img={{ uri: `${avatarUrl}?param=30y30` }} />
          <View style={{ marginLeft: 10 }}>
            <H3>{nickname}</H3>
            <Tip>{`Lv${level}`}</Tip>
          </View>
          <View style={{ flex: 1 }} />
          <TouchableOpacity style={styles.SignIn} >
            <Normal>已签到</Normal>
          </TouchableOpacity>
        </View>
        <Separator />
        <View style={styles.menuWrap} >
          <View style={styles.menuItem}>
            <Tip>动态</Tip>
            <Normal>{eventCount}</Normal>
          </View>
          <View style={styles.menuItem}>
            <Tip>关注</Tip>
            <Normal>{follows}</Normal>
          </View>
          <View style={styles.menuItem}>
            <Tip>粉丝</Tip>
            <Normal>{followeds}</Normal>
          </View>
          <View style={[styles.menuItem, { borderRightWidth: 0 }]}>
            <Icon name="ios-create-outline" size={15} />
            <Tip>我的资料</Tip>
          </View>
        </View>
        <View style={{ height: 10 }} />
        <View style={{ backgroundColor: '#ffffff' }}>
          <MenuRow leftIcon="ios-mail-outline" title="我的消息" border={false} rightIcon />
        </View>
        <View style={{ height: 10 }} />
        <View style={{ backgroundColor: '#ffffff' }}>
          <MenuRow leftIcon="ios-pin-outline" title="会员中心" rightIcon />
          <MenuRow leftIcon="ios-cart-outline" title="商城" rightIcon />
          <MenuRow leftIcon="ios-briefcase-outline" title="在线听歌免流量" rightIcon border={false} />
        </View>
        <View style={{ height: 10 }} />
        <View style={{ backgroundColor: '#ffffff' }}>
          <MenuRow leftIcon="ios-settings-outline" title="设置" rightIcon />
          <MenuRow leftIcon="ios-qr-scanner-outline" title="扫一扫" rightIcon />
          <MenuRow leftIcon="ios-shirt-outline" title="个性换肤" rightIcon />
          <MenuRow leftIcon="ios-cloudy-night-outline" title="夜间模式" rightIcon />
          <MenuRow leftIcon="ios-clock-outline" title="定时开关" rightIcon />
        </View>
      </ScrollView>
    );
  }
}


export default Account;
