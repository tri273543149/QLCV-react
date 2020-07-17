import React, { Component } from "react";
import CheckboxGroup from "react-checkbox-group";

class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
      priority: "",
      memberIDArr: [],
      labelArr: [],
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTask(this.state);
    this.props.editTask(this.state);
  };
  memberOnChange = (newMember) => {
    this.setState({
      memberIDArr: newMember,
    });
  };
  labelOnChange = (newLabel) => {
    this.setState({
      labelArr: newLabel,
    });
  };
  clearForm = () => {
    this.setState({
      id: "",
      name: "",
      description: "",
      priority: "",
      memberIDArr: [],
      labelArr: [],
    });
  };
  componentWillReceiveProps = (nextProps) => {
    if (nextProps && nextProps.isAddNewTask) {
      this.clearForm();
    }
    if (nextProps && nextProps.taskEditing && !nextProps.isAddNewTask) {
      this.setState({
        id: nextProps.taskEditing.id,
        name: nextProps.taskEditing.name,
        description: nextProps.taskEditing.description,
        priority: nextProps.taskEditing.priority,
        memberIDArr: nextProps.taskEditing.memberIDArr,
        labelArr: nextProps.taskEditing.labelArr,
      });
    }
  };
  render() {
    let { isAddNewTask } = this.props;
    let { name, description, priority, memberIDArr, labelArr } = this.state;
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                {isAddNewTask ? "Thêm công việc" : "Cập nhật công việc"}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <form onSubmit={this.onSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label>Mô tả:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    name="description"
                    onChange={this.onChange}
                    value={description}
                  />
                </div>
                <div className="form-group">
                  <label>Độ ưu tiên:</label>
                  <select
                    className="form-control"
                    name="priority"
                    onChange={this.onChange}
                    value={priority}
                  >
                    <option value={-1}>Chọn độ ưu tiên</option>
                    <option value={3}>Thấp</option>
                    <option value={2}>Trung bình</option>
                    <option value={1}>Cao</option>
                  </select>
                </div>
                <label>Người thực hiện:</label>
                <CheckboxGroup
                  name="memberIDArr"
                  value={memberIDArr}
                  onChange={this.memberOnChange}
                >
                  {(Checkbox) => (
                    <>
                      <label>
                        <Checkbox value="user_2" />
                        Trương Tấn Khải
                      </label>
                      <label>
                        <Checkbox value="user_3" />
                        Đặng Trun Hiếu
                      </label>
                      <label>
                        <Checkbox value="user_4" />
                        Phó Nghĩa Văn
                      </label>
                      <label>
                        <Checkbox value="user_5" />
                        Nguyễn Tiến Minh Tuấn
                      </label>
                    </>
                  )}
                </CheckboxGroup>
                <br />
                <label>Nhãn:</label>
                <CheckboxGroup
                  name="labelArr"
                  value={labelArr}
                  onChange={this.labelOnChange}
                >
                  {(Checkbox) => (
                    <>
                      <label>
                        <Checkbox value="Frontend" />
                        Frontend
                      </label>
                      <label>
                        <Checkbox value="Backend" />
                        Backend
                      </label>
                      <label>
                        <Checkbox value="API" />
                        API
                      </label>
                      <label>
                        <Checkbox value="Issue" />
                        Issue
                      </label>
                    </>
                  )}
                </CheckboxGroup>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  id="btnSubmit"
                  type="submit"
                  className="btn btn-primary"
                >
                  {isAddNewTask ? "Thêm công việc" : "Cập nhật công việc"}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalPopup;
