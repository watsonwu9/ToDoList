'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var t = require('tcomb-form-native');
var { View, TouchableHighlight, Text } = React;
var Form = t.form.Form;

var ToDo = t.struct({ txt: t.Str, complete: t.Bool });

var options = {
  fields: {
    txt: {
      label: 'To-Do Item',
      placeholder: 'enter a to do item here',
      autoFocus: true
    }
  }
};

var ToDoEdit = React.createClass({
  onUpdate: function () {
    var value = this.refs.form.getValue();
    if(value) {
      this.props.update(value, this.props.id);
    }
  },
  _onChange:function(){
    console.log("you made some chagnes");
  },
  render:function(){
    return (
        <View style={styles.todo}>
          <Form
            ref="form"
            type={ToDo}
            onChange={this._onChange}
            options={options}
            value={this.props.item} />
          <TouchableHighlight
            style={[styles.button, styles.saveButton]}
            onPress={this.onUpdate}
            underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
      )
  }
});

module.exports = ToDoEdit;
