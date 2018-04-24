import React, { PureComponent } from "react";
import {
  View,
  Animated,
  PanResponder,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Todo extends PureComponent {
  constructor() {
    super();

    this.state = {
      position: new Animated.ValueXY({ x: 0, y: 0 })
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => false,
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: this.onPanResponderMove.bind(this),
      onPanResponderRelease: this.onPanResponderRelease.bind(this)
    });
  }

  onPanResponderMove(e, gestureState) {
    const deltaX = Math.round(gestureState.dx);
    const xPosition = deltaX < -40 ? -70 : deltaX > 40 ? 70 : deltaX;
    const position = new Animated.ValueXY({
      x: xPosition,
      y: 0
    });
    this.setState({ position });
  }

  onPanResponderRelease(e, gestureState) {
    const deltaX = Math.floor(gestureState.dx);
    if ((deltaX < 40 && deltaX >= 0) || (deltaX > -40 && deltaX <= 0)) {
      this.setState({ position: new Animated.ValueXY({ x: 0, y: 0 }) });
    }
  }

  render() {
    const { todo, deleteTodo, editTodo } = this.props;
    const { position } = this.state;

    return (
      <View>
        <Animated.View
          style={[styles.itemWrapper, position.getLayout()]}
          {...this.panResponder.panHandlers}
        >
          <Text>{todo.title}</Text>
        </Animated.View>

        <TouchableOpacity
          style={[styles.absButton, styles.leftButton]}
          onPress={() => deleteTodo(todo.id)}
        >
          <Icon name="md-trash" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.absButton, styles.rightButton]}
          onPress={() => editTodo(todo)}
        >
          <Icon name="md-create" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 20,
    zIndex: 1
  },
  absButton: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    backgroundColor: "#f2f2f2",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  leftButton: {
    left: 0
  },
  rightButton: {
    right: 0
  }
});

export default Todo;
