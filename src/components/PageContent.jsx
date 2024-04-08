import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart from Chart.js library
import ProductsTable from "./ProductsTable";

const PageContent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const xValues = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    const myChart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            label: "Dataset 1",
            data: [860, 1140, 1060, 1060, 1070, 1110, 1330],
            borderColor: "#ffa14a",
            backgroundColor: "#ffa14a",
            fill: false,
          },
          {
            label: "Dataset 2",
            data: [1600, 1700, 1700, 1900, 2000, 2700, 4000],
            borderColor: "#8ac389",
            backgroundColor: "#8ac389",
            fill: false,
          },
        ],
      },
      options: {
        legend: { display: true },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="middlePart">
      <div className="header">
        <div className="inputContainer">
          <div className="searchIconContainer">
            <i className="bi bi-search"></i>
          </div>
          <input className="searchInput" placeholder="Search for everything " />
        </div>
        <div className="otherHeaderDetail">
          <i className="bi bi-chat-square-fill"></i>
          <i className="bi bi-bell"></i>
          <p className="accountName">HypeBeast Store</p>
          <div className="letterCircle">H</div>
          <i className="bi bi-caret-down-fill"></i>
        </div>
      </div>
      <div className="bodyContainer">
        <div className="topContainers">
          <div className="chart">
            <p>Revenue</p>
            <div>
              <p className="totalRevenue">$2,180.00</p>
              <p className="percentageRevenue">(+8.26%)</p>
            </div>
            <canvas
              id="myChart"
              ref={canvasRef}
              style={{ width: "100%", maxWidth: "700px" }}
            ></canvas>
          </div>

          <div className="overView">
            <div className="divsContainer">
              <div className="singleSquare firstSquare">
                Sales Today
                <div className="pushToEnd">
                  <div className="bagContainer">
                    <i className="bi bi-basket3"></i>
                  </div>
                </div>
                <p>$120</p>
                *Updated every order success
              </div>

              <div className="singleSquare">
                Total Earning
                <div className="pushToEnd">
                  <div className="currencyContainer">
                    <i class="bi bi-currency-dollar"></i>
                  </div>
                </div>
                <div className="flex">
                  <p>$81,200</p>
                  <p className="percentageRevenue">+8.26%</p>
                </div>
                More earning than usual
              </div>
            </div>

            <div className="divsContainer">
              <div className="singleSquare">
                Total Orders
                <div className="pushToEnd">
                  <div className="bagContainer">
                    <i class="bi bi-receipt"></i>
                  </div>
                </div>
                <div className="flex">
                  <p>102</p>
                  <p className="percentageRevenue">+2.16%</p>
                </div>
                More orders than usual
              </div>
              <div className="singleSquare">
                Visitor Today
                <div className="pushToEnd">
                  <div className="bagContainer">
                    <i class="bi bi-people-fill"></i>
                  </div>
                </div>
                <div className="flex">
                  <p>$81,020</p>
                  <p className="percentageRevenue">+3.06%</p>
                </div>
                More visitors than usual
              </div>
            </div>
          </div>
        </div>
      </div>
     <ProductsTable/>
    </div>
  );
};

export default PageContent;
