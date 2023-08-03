import React from "react";

import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import "./about.css";

const About = () => {
  return (
    <Container className="about-content">
      <Container className="history-wrapper">
        <p>
          <strong>LỊCH SỬ HÌNH THÀNH</strong>
        </p>
        <span>
          Được thành lập vào năm 2004, Công ty TNHH XLSX & TMDV Trường Long tự
          hào là một trong những công ty ngày càng lớn mạnh trong lĩnh vực thi
          công xây dựng công trình, kinh doanh vật tư, thiết bị ngành Viễn thông
          Qua 6 năm hoạt động và phát triển, công ty đã đạt được những thành tựu
          đáng khích lệ, tạo dựng mối quan hệ lâu dài, bền vững và uy tín với
          khách hàng và đối tác. Từ nhiều năm nay, Công ty Trường Long đã và
          đang nỗ lực không ngừng để cải thiện cơ sở vật chất, chất lượng sản
          phẩm do công ty gia công sản xuất, công trình thi công và các sản phẩm
          thương mại ngành viễn thông nhằm đáp ứng nhu cầu ngày càng cao của
          khách hàng.
        </span>
        <br></br>
        <span>
          Công ty TNHH XLSX & TMDV Trường Long với đội ngũ nhân viên giàu kinh
          nghiệm, nhiệt tình và chuyên nghiệp luôn đem đến cho khách hàng cảm
          giác hài lòng và tin cậy khi thi công công trình và mua sản phẩm của
          chúng tôi. Lấy lợi ích và sự hài lòng của khách hàng làm tiêu chí hoạt
          động. Với định hướng và chiến lược đúng đắn, Công ty TNHH XLSX & TMDV
          Trường Long đang dần khẳng định chỗ đứng của mình trên lĩnh vực xây
          dựng thi công công trình, kinh doanh sắt thép xây dựng và các sản phẩm
          ngành Viễn thông.
        </span>
      </Container>
      <Container className="factory-image-container">
        <img
          className="img-fluid rounded "
          src="https://uploads-ssl.webflow.com/5fc06d863124035a044af0ba/5fc85b6b4b3c70e9da887444_cong-ty-san-xuat-co-khi.jpg"
          alt="Truong Long Factory"
        />
      </Container>
      <Container className="table-wrapper">
        <Table responsive id="about-table">
          <tbody>
            <tr>
              <td>
                <p>
                  <strong>THÔNG TIN CHUNG</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <strong>Tên công ty</strong>
                </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <p>
                  CÔNG TY XÂY LẮP SẢN XUẤT VÀ THƯƠNG MẠI DỊCH VỤ TRƯỜNG LONG
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <strong>Tên giao dịch quốc tế</strong>
                </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <p>
                  <span>
                    TRUONG LONG CONSTRUCTION PRODUCTION AND TRADING SERVICE
                    COMPANY
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <strong>Tên viết tắt</strong>
                </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <p>
                  <span>TRUONG LONG</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <strong>Trụ sở nhà máy</strong>
                </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <p>
                  <span>
                    Đường Số 02, KCN Hòa Cầm, Quận Cẩm Lệ, Tp. Đà Nẵng
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <strong>Điện thoại</strong>
                </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <p>
                  <span>0906557799-0901125888</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <strong>Fax</strong>
                </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <p>
                  <span>info@truonglongcoltd.com</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <strong>Email</strong>
                </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <p>
                  <span>info@truonglongcoltd.com</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <strong>Website</strong>
                </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <p>
                  <span>info@truonglongcoltd.com</span>
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default About;
