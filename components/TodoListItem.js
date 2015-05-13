'use strict';

var React = require('react-native');
var styles = require('./styles');

var {
	Text,
	View,
	TouchableHighlight
}= React;

var todoListItem = React.createClass({
	  render: function() {
    var item = this.props.item;
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}>
          <View>
            <Text>
              {item.text}
            </Text>
          </View>
        </TouchableHighlight>
        
      </View>
    );
  }

});

module.exports = todoListItem;