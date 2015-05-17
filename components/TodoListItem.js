'use strict';

var React = require('react-native');
var styles = require('./styles');
var {
	Text,
	View,
	TouchableHighlight,
}= React;


var todoListItem = React.createClass({
 
  componentWillMount:function(){
    console.log('todoListItem will mount');
  },

    componentWillUnMount:function(){
    console.log('todoListItem will unmount');
  },
    componentDidMount:function(){
    console.log('todoListItem did mount');
  },

  render:function(){
    console.log('todoListItem render');
    var item = this.props.item;
    return (
       <View style={styles.todoListItem}>
        <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}>
          <View>
            <Text style={styles.todoListItemText}>
              {item.text}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
    
  }
});
  

module.exports = todoListItem;