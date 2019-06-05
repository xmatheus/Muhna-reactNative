import React from 'react';
import { StyleSheet, View, Text,Dimensions,PixelRatio,ScrollView,Linking,ActivityIndicator } from 'react-native';
import HTML from 'react-native-render-html'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconMat from 'react-native-vector-icons/MaterialIcons'


const widthPercentageToDP = widthPercent => {
	const screenWidth = Dimensions.get('window').width;
	return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
  };
  
  const heightPercentageToDP = heightPercent => {
	const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
  };
  

export default class extends React.Component {

	constructor(props){
		super(props)
		const { navigation } = this.props;
		const item = navigation.getParam('item', 'no-name');
		setTimeout( ()=> {
		
		this.setState({view:
			<View style={styles.container}>
				<View style={styles.BarraTitulo}>
					<Text style={styles.tituloText}>{item.title}</Text>	
					<View style={styles.containerIcon}>
						<View style={styles.iconTitle}>
							<IconAnt name="user" size={20} color="#0008" />
							<Text style={styles.iconText}>{item.autor}</Text>
						</View>
						<View style={styles.iconTitle}>
							<IconMat name="date-range" size={20} color="#000" />
							<Text style={styles.iconText}>{this.formatDate(item.createAt)}</Text>
						</View>
					</View>
				</View>
				
				<ScrollView style={styles.scroll}>
					<HTML
						html={"<div>" + item.news + "</div>"}
						tagsStyles={tagsStyles}
						onLinkPress={(evt, href) => { Linking.openURL(href) }}
						textSelectable={true}
					></HTML>
				</ScrollView>				
			</View>
		})
		this.setState({visible:false})
	},1)
		
		
    }
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('name', ''),
			textAlign: 'center'
		}
	}
	state = {
		visible:true
	}

	formatDate(frase) {
		return frase.slice(0, 10)
	}
	componentDidMount(){
		// setTimeout(()=>{
		// 	this.setState({visible:false})
		// },1000)
		
	}
	render() {

		// const { navigation } = this.props;
		// const item = navigation.getParam('item', 'no-name');
		// console.warn({item})
	

		return (
			<View style={styles.container}>
				{/* {act} */}
				{/* 				
				<ActivityIndicator
				style={styles.activityIndicator}
				animating={this.state.visible}
				></ActivityIndicator> */}
				{this.state.view}
			</View>
		);
	}
}
const tagsStyles = {
	p: {
		textAlign: 'justify',
		color: '#000'
	},
	strong:{
		textAlign:'justify',
		color:'#000'
	},
	l1: {
		textAlign: 'justify',
		color: '#000'
	},
	h1: {
		textAlign: 'center',
		color: '#000'
	},
	h2: {
		textAlign: 'center',
		color: '#000'
	},
	h3: {
		textAlign: 'center',
		color: '#000'
	},

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'flex-start',
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	scroll: {
		flexGrow: 10,
		flexDirection: 'column',
		paddingLeft:5,
		paddingRight:5
	},
	BarraTitulo: {
		flexGrow: 1,
		width: '100%',
		justifyContent: 'flex-end',
		
		borderRadius: 4,
		marginBottom:1,
		shadowColor: '#000000',
		shadowOffset: {
			height: 3,
			width: 5,
		},
		shadowRadius: 5,
		shadowOpacity: 0.9,
		elevation:3
	
	},
	tituloText: {
		fontSize: 25 / PixelRatio.getFontScale(),
		textAlign: 'center',
		color: '#000',
		paddingBottom: 25
		// paddingBottom:10,
	},
	containerIcon: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		paddingBottom:20,
		paddingLeft:2 
		// borderBottomColor:'#000',
		// borderBottomWidth: 1,
		// marginBottom: 1,
	},
	iconTitle: {
		flexDirection: 'row',
		// alignItems: 'flex-end',
		justifyContent: 'flex-start',
		borderRadius:5,
	},
	iconText: {
		color: '#000',
		textAlignVertical: 'bottom'
	}
});


{/* <View style={styles.container}>

<View style={styles.BarraTitulo}>
	<Text style={styles.tituloText}>{item.title}</Text>
	<View style={styles.containerIcon}>
		<View style={styles.iconTitle}>
			<IconAnt name="user" size={20} color="#0008" />
			<Text style={styles.iconText}>{item.autor}</Text>
		</View>
		<View style={styles.iconTitle}>
			<IconMat name="date-range" size={20} color="#000" />
			<Text style={styles.iconText}>{this.formatDate(item.createAt)}</Text>
		</View>
	</View>
</View>
<ScrollView style={styles.scroll}>
	<HTML
		html={"<div>" + item.news + "</div>"}
		tagsStyles={tagsStyles}
		onLinkPress={(evt, href) => { Linking.openURL(href) }}
		textSelectable={true}
	></HTML>
</ScrollView>
</View> */}