import { Calendar, Select, Radio, Col, Row, Typography } from 'antd';
import React from 'react';
class Calentbar extends React.Component{
  constructor(props){
    super(props)
    this.onPanelChange = this.onPanelChange.bind(this)
  }
  onPanelChange(value, mode){
    console.log(value, mode);
  }
  render(){
    return(
      <div className="site-calendar-customize-header-wrapper">
        <Calendar
          fullscreen={false}
          headerRender={({ value, type, onChange, onTypeChange }) => {
            const start = 0;
            const end = 12;
            const monthOptions = [];
            const current = value.clone();
            const localeData = value.localeData();
            
            const months = [];
            for (let i = 0; i < 12; i++) {
              current.month(i);
              months.push(localeData.monthsShort(current));
            }
            /**这个是月份下拉框 */
            for (let index = start; index < end; index++) {
              monthOptions.push(
                <Select.Option className="month-item" key={`${index}`}>
                  {monthOptions[index]}
                </Select.Option>,
              );
            }
            //月份下标
            const month = value.month();
            //年份下标
            const year = value.year();
            const options = [];
            for (let i = year - 10; i < year + 10; i += 1) {
              options.push(
                <Select.Option key={i} value={i} className="year-item">
                  {i}
                </Select.Option>,
              );
            }
            return (
              <div style={{ padding: 8 }}>
                <Typography.Title level={4}>当日任务</Typography.Title>
                <Row gutter={8}>
                  <Col>
                    <Radio.Group size="small" onChange={e => onTypeChange(e.target.value)} value={type}>
                      <Radio.Button value="month">月</Radio.Button>
                      <Radio.Button value="year">年</Radio.Button>
                    </Radio.Group>
                  </Col>
                  <Col>
                    <Select
                      size="small"
                      dropdownMatchSelectWidth={false}
                      className="my-year-select"
                      onChange={newYear => {
                        const now = value.clone().year(newYear);
                        onChange(now);
                      }}
                      value={String(year)}
                    >
                      {options}
                    </Select>
                  </Col>
                  <Col>
                    <Select
                      size="small"
                      dropdownMatchSelectWidth={false}
                      value={String(month)}
                      onChange={selectedMonth => {
                        const newValue = value.clone();
                        newValue.month(parseInt(selectedMonth, 10));
                        onChange(newValue);
                      }}
                    >
                      {monthOptions}
                    </Select>
                  </Col>
                </Row>
              </div>
            );
          }}
        />
      </div>
    )
  }
}

export default Calentbar