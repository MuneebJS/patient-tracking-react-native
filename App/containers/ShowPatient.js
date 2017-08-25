import React, { Component } from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import * as firebase from 'firebase';
import styles from '../style'
// import { SearchBar } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

// import DatePicker from '../components/DatePicker'



export default class ShowPatient extends React.Component {
    constructor() {
        super();
        this.showData = this.showData.bind(this);
        this.searchByName = this.searchByName.bind(this);
        this.searchByDate = this.searchByDate.bind(this);
        this.state = {
            normalStatus: true,
            filterStatus: false,
            data: [],
            filterData: [],
            searchedVal: ''

        }
    }

    searchByName(text) {
        var arrayToPushedData = this.state.data;
        this.setState({ searchedVal: text })
        var arrayToPushedData = arrayToPushedData.filter(asset => asset.patient.name.toLowerCase().indexOf(text) !== -1);

        if (text == '') {
            this.setState({
                normalStatus: true,
                filterStatus: false
            })

        }
        else {
            this.setState({
                filterStatus: true,
                normalStatus: false,
                filterData: arrayToPushedData,
                date: ''
            })
        }
    }

    searchByDate(date) {
        this.setState({
            date: date
        })
        var arrayToPushedData = this.state.data;
        this.setState({ date: date })
        var arrayToPushedData = arrayToPushedData.filter(asset => asset.patient.date.indexOf(date) !== -1);

        if (date == '') {
            this.setState({
                normalStatus: true,
                filterStatus: false
            })

        }
        else {
            this.setState({
                filterStatus: true,
                normalStatus: false,
                filterData: arrayToPushedData
            })
        }        
    }
    showData() {
        // empty array where we push received data
      
        var arrayToPushedData = [];
        // db reference
        let dbRef = firebase.database().ref('Patients');
        dbRef.on('child_added', snap => {
            arrayToPushedData = this.state.data;
            arrayToPushedData.push(snap.val());
            this.setState({
                status: true,
                data: arrayToPushedData,
                // backupData: arrayToPushedData
            })
        })
    }


    static navigationOptions = {
        title: 'Your Patients',
    };

    componentDidMount() {
        this.showData();
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput multiline={true}
                    style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
                    onChangeText={(text) => this.searchByName(text.toLowerCase())}
                    placeholder="Search"
                />
    
                <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="D/M/YYYY"
        minDate="1/5/2016"
        maxDate="1/5/2018"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys. 
        }}
        onDateChange={(date) => this.searchByDate(date)}
      />

                {this.state.normalStatus && <FlatList
                    data={this.state.data}
                    renderItem={({ item, index }) =>
                        < View style={styles.margin20} key={index}>
                            <Text >Name:  {item.patient.name} </Text>
                            <Text>Date: {item.patient.date}</Text>
                            <Text>Desease: {item.patient.desease}</Text>
                            <Text>Sencivity Level: {item.patient.senLevel}</Text>
                            <Text>Description: {item.patient.description}</Text>
                        </View>
                    }
                />}

                {this.state.filterStatus && <FlatList
                    data={this.state.filterData}
                    renderItem={({ item }) =>
                        < View style={styles.margin20} >
                            <Text >Name:  {item.patient.name} </Text>
                            <Text>Date: {item.patient.date}</Text>
                            <Text>Desease: {item.patient.desease}</Text>
                            <Text>Sencivity Level: {item.patient.senLevel}</Text>
                            <Text>Description: {item.patient.description}</Text>
                        </View>
                    }
                />}
            </View>
        )
    }
}
