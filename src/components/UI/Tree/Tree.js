import React from "react";
import PropTypes from "prop-types";

// Components
import { Tree, Icon } from "antd";
const { TreeNode } = Tree;

class TreeComp extends React.Component {
  static propTypes = {
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired
          })
        )
      })
    )
  };

  static defaultProps = {
    nodes: []
  };

  render() {
    return (
      <div className="Tree">
        <Tree>
          {this.props.nodes.map(node => (
            <TreeNode
              icon={<Icon type="smile-o" />}
              title={node.name}
              key={node.name}
            >
              {node.items.map(innerNode => (
                <TreeNode
                  icon={<Icon type="smile-o" />}
                  title={innerNode.name}
                  key={innerNode.name}
                />
              ))}
            </TreeNode>
          ))}
        </Tree>
      </div>
    );
  }
}

export default TreeComp;
