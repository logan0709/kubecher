import { Modal } from "antd";
import React from "react";

import YamlEditor from "./YamlEditor";

class YamlModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleOk(e) {
    this.props.switchYamlFormVisible();
  }

  handleCancel(e) {
    this.props.switchYamlFormVisible();
  }

  render() {
    return (
      <div>
        <Modal
          style={{ top: 10 }}
          title="Yaml"
          visible={this.props.show}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          closable={false}
          width="full"
        >
          <YamlEditor yamlData={this.props.yamlData} />
        </Modal>
      </div>
    );
  }
}

export default YamlModal;
