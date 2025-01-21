import { LuMonitorUp } from "react-icons/lu";
import { FaMicrochip } from "react-icons/fa6";
import { FaMemory } from "react-icons/fa";
import { BsGpuCard } from "react-icons/bs";
import { MdOutlineStorage, MdStorage } from "react-icons/md";
import css from "./Download.module.css";

const Download = () => {
  return (
    <section className={css.downloadSection}>
      <div className={css.download}>
        <h2 className={css.downloadTitle}>Download MiSide Today</h2>
        <p className={css.txt}>Download MiSide Today</p>
        <div className={css.iframeWrapper}>
          <iframe
            src="https://store.steampowered.com/widget/2527500/"
            frameBorder="0"
            width="646"
            height="190"
          ></iframe>
        </div>
      </div>
      <div className={css.req}>
        <div className={css.reqContainer}>
          <h3 className={css.title}>Minimum Requirements</h3>
          <ul className={css.iconsList}>
            <li className={css.icon}>
              <LuMonitorUp />
              <span>OS:</span>
              <span className={css.txtSec}>Windows 7/8/10</span>
            </li>
            <li className={css.icon}>
              <FaMicrochip />
              <span>Processor:</span>
              <span className={css.txtSec}>
                Intel Core i5-2300 @ 2,80 GHz, AMD FX 8120 @ 3.1 GHz
              </span>
            </li>
            <li className={css.icon}>
              <FaMemory />
              <span>Memory:</span>
              <span className={css.txtSec}>4 GB RAM</span>
            </li>
            <li className={css.icon}>
              <BsGpuCard />
              <span>Graphics:</span>
              <span className={css.txtSec}>
                NVIDIA GT 630 / 650m, AMD Radeon HD6570 or equivalent
              </span>
            </li>
            <li className={css.icon}>
              <MdStorage />
              <span>Storage:</span>
              <span className={css.txtSec}>2 GB available space</span>
            </li>
          </ul>
        </div>
        <div className={css.reqContainer}>
          <h3 className={css.title}>Recommended Requirements</h3>
          <ul className={css.iconsList}>
            <li className={css.icon}>
              <LuMonitorUp />
              <span>OS:</span>
              <span className={css.txtSec}>Windows 7/8/10</span>
            </li>
            <li className={css.icon}>
              <FaMicrochip />
              <span>Processor:</span>
              <span className={css.txtSec}>
                Intel Core i5-2300 @ 2,80 GHz, AMD FX 8120 @ 3.1 GHz
              </span>
            </li>
            <li className={css.icon}>
              <FaMemory />
              <span>Memory:</span>
              <span className={css.txtSec}>4 GB RAM</span>
            </li>
            <li className={css.icon}>
              <BsGpuCard />
              <span>Graphics:</span>
              <span className={css.txtSec}>
                NVIDIA GT 630 / 650m, AMD Radeon HD6570 or equivalent
              </span>
            </li>
            <li className={css.icon}>
              <MdStorage />
              <span>Storage:</span>
              <span className={css.txtSec}>2 GB available space</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Download;
