import React from 'react';
import './styles/specificationstable/specificationstable.css'
import {motion} from 'motion/react'

const SpecificationsTable = () => {
  const hr = <motion.div
          initial={{width: '10%'}}
          transition= {{duration: 1.5, ease: 'backOut'}}
          whileInView={{width: '100%'}}
          viewport={{once: false, amount: 0.01}}
          className="hr"/>

  return (
    <div className="specifications-container">
      <motion.table
        initial={{x: -40, opacity: 0}}
        transition= {{duration: 0.5, ease: 'circOut',}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false, amount: 0.5}}>
        <thead>
          <tr>
            <th colSpan="2" className="main-category">SIZE & WEIGHT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MODEL</td>
            <td>X6886</td>
          </tr>
          <tr>
            <td>DIMENSIONS</td>
            <td>164mm*75.8mm*5.95mm</td>
          </tr>
          <tr>
            <td>WEIGHT</td>
            <td>155g</td>
          </tr>
          <tr>
            <td>COLOUR</td>
            <td>Sleek Black / Titanium Silver / Coral Tides / Misty Violet / Sonic Yellow / Moco Cyber Green</td>
          </tr>
        </tbody>
      </motion.table>

      {hr}

      <motion.table
        initial={{x: -40, opacity: 0}}
        transition= {{duration: 0.5, ease: 'circOut',}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false, amount: 0.5}}>
        <thead>
          <tr>
            <th colSpan="2" className="main-category">PLATFORM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CHIPSET</td>
            <td>MediaTek Helio G200</td>
          </tr>
          <tr>
            <td>CPU</td>
            <td>Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)</td>
          </tr>
          <tr>
            <td>GPU</td>
            <td>Mali-G57 MC2</td>
          </tr>
          <tr>
            <td>PROCESS</td>
            <td>6nm</td>
          </tr>
        </tbody>
      </motion.table>

      {hr}

      <motion.table
        initial={{x: -40, opacity: 0}}
        transition= {{duration: 0.5, ease: 'circOut',}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false, amount: 0.5}}>
        <thead>
          <tr>
            <th colSpan="2" className="main-category">NETWORK</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TECHNOLOGY</td>
            <td>4G/3G/2G</td>
          </tr>
          <tr>
            <td>BANDWIDTH</td>
            <td>2G: B2|3|5|8<br />3G: B1|2|4|5|8<br />4G: B1|2|3|4|5|7|8|20|28A|28B|38|41(120M)|40</td>
          </tr>
        </tbody>
      </motion.table>

      {hr}

      <motion.table
        initial={{x: -40, opacity: 0}}
        transition= {{duration: 0.5, ease: 'circOut',}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false, amount: 0.5}}>
        <thead>
          <tr>
            <th colSpan="2" className="main-category">CAMERA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>REAR CAMERA</td>
            <td>Main: 50MP, SONY IMX882, F1.79, FOV 81°, AF supported</td>
          </tr>
          <tr>
            <td>FRONT CAMERA</td>
            <td>13MP, F2.0, FOV 90°</td>
          </tr>
          <tr>
            <td>FLASH</td>
            <td>Front Flash: Dual Flash<br />Rear Flash: Dual Flash</td>
          </tr>
          <tr>
            <td>SCENE MODES</td>
            <td>AI CAM, Portrait, Super Night, Video, Vlog, Slow Motion, Time-Lapse, Dual Video, AIGC Portrait, Panorama, Pro, Sky Shop, Documents</td>
          </tr>
          <tr>
            <td>VIDEO RECORDING</td>
            <td>Front/ Rear: 2K 30FPS / 1080P 60FPS / 1080P 30FPS / 720P 30FPS<br />Slow Motion(Front): 720P 120FPS</td>
          </tr>
        </tbody>
      </motion.table>

      {hr}

      <motion.table
        initial={{x: -40, opacity: 0}}
        transition= {{duration: 0.5, ease: 'circOut',}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false, amount: 0.5}}>
        <thead>
          <tr>
            <th colSpan="2" className="main-category">MEMORY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="2">ROM & RAM</td>
            <td>128GB ROM + 8GB RAM + 8GB Extended RAM</td>
          </tr>
          <tr>
            <td>256GB ROM + 8GB RAM + 8GB Extended RAM</td>
          </tr>
          <tr>
            <td>ROM & RAM TYPE</td>
            <td>UFS2.2 + LPDDR4X</td>
          </tr>
        </tbody>
      </motion.table>

      {hr}

      <motion.table
        initial={{x: -40, opacity: 0}}
        transition= {{duration: 0.5, ease: 'circOut',}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false, amount: 0.5}}>
        <thead>
          <tr>
            <th colSpan="2" className="main-category">DISPLAY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SIZE</td>
            <td>6.78 inches</td>
          </tr>
          <tr>
            <td>SCREEN-TO-BODY RATIO</td>
            <td>93.40%</td>
          </tr>
          <tr>
            <td>RESOLUTION</td>
            <td>1.5K</td>
          </tr>
          <tr>
            <td>REFRESH RATE</td>
            <td>60Hz/90Hz/120Hz/144Hz</td>
          </tr>
          <tr>
            <td>TYPE</td>
            <td>LTPS</td>
          </tr>
          <tr>
            <td>MATERIAL</td>
            <td>AMOLED</td>
          </tr>
          <tr>
            <td>COVER GLASS</td>
            <td>Corning® Gorilla® Glass 7i</td>
          </tr>
          <tr>
            <td>BRIGHTNESS</td>
            <td>700nits (TYP), 1600nits (HBM Brightness), 4500nits (Peak Brightness)</td>
          </tr>
          <tr>
            <td>COLOR GAMUT</td>
            <td>100% DCI-P3</td>
          </tr>
          <tr>
            <td>TOUCH SAMPLING RATE</td>
            <td>Up to 240Hz</td>
          </tr>
          <tr>
            <td>INSTANT TOUCH SAMPLING RATE</td>
            <td>2160Hz</td>
          </tr>
          <tr>
            <td>PWM DIMMING</td>
            <td>Up to 2304H</td>
          </tr>
          <tr>
            <td>OTHER FEATURES</td>
            <td>Always-On Display, SGS Low Blue Light Hardware Certification, Sleep Aid Mode</td>
          </tr>
        </tbody>
      </motion.table>

      {hr}

      <motion.table
        initial={{x: -40, opacity: 0}}
        transition= {{duration: 0.5, ease: 'circOut',}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false, amount: 0.5}}>
        <thead>
          <tr>
            <th colSpan="2" className="main-category">SENSORS & TOOLS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>G-SENSOR</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>E-COMPASS</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>GYROSCOPE</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>LIGHT SENSOR</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>PROXIMITY SENSOR</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>FINGERPRINT</td>
            <td>YES/IN-DISPLAY FINGERPRINT</td>
          </tr>
          <tr>
            <td>MOTOR</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>INFRARED BLASTER</td>
            <td>YES</td>
          </tr>
        </tbody>
      </motion.table>

      {hr}

      <motion.table
        initial={{x: -40, opacity: 0}}
        transition= {{duration: 0.5, ease: 'circOut',}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false, amount: 0.5}}>
        <thead>
          <tr>
            <th colSpan="2" className="main-category">MULTIMEDIA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AUDIO PLAYBACK</td>
            <td>MP3, FLAC, OGG, OGA, WAV, AAC, AMR, AWB, APE, MIDI</td>
          </tr>
          <tr>
            <td>VIDEO PLAYBACK</td>
            <td>MP4, MKV, TS, 3GP, WEBM</td>
          </tr>
          <tr>
            <td>OTHER FEATURES</td>
            <td>Audio: DTS, Dual Speakers, JBL, Hi-Res Audio<br />Video: Widvine L1</td>
          </tr>
        </tbody>
      </motion.table>

      {hr}

      <motion.table
        initial={{x: -40, opacity: 0}}
        transition= {{duration: 0.5, ease: 'circOut',}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false, amount: 0.5}}>
        <thead>
          <tr>
            <th colSpan="2" className="main-category">BATTERY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CAPACITY (TYP)</td>
            <td>5160mAh (TYP)</td>
          </tr>
          <tr>
            <td>CHARGING</td>
            <td>Max 45W, 10V/4A</td>
          </tr>
          <tr>
            <td>REVERSE CHARGING</td>
            <td>YES, MAX 10W</td>
          </tr>
        </tbody>
      </motion.table>

      {hr}

      <motion.table
        initial={{x: -40, opacity: 0}}
        transition= {{duration: 0.5, ease: 'circOut',}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false, amount: 0.5}}>
        <thead>
          <tr>
            <th colSpan="2" className="main-category">CONNECTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SIM CARD SLOT</td>
            <td>2 nano SIMs</td>
          </tr>
          <tr>
            <td>GPS NAVIGATION</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>WIFI</td>
            <td>Wi-Fi 802.11 (a/b/g/n/ac)</td>
          </tr>
          <tr>
            <td>BLUETOOTH</td>
            <td>BLUETOOTH 5.4</td>
          </tr>
          <tr>
            <td>USB PORT</td>
            <td>USB TYPE-C</td>
          </tr>
          <tr>
            <td>OTG</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>EARPHONE</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>FM</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>NFC</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>SPLASH, WATER AND DUST RESISTANCE</td>
            <td>IP65</td>
          </tr>
        </tbody>
      </motion.table>

      {hr}

      <motion.table
        initial={{x: -40, opacity: 0}}
        transition= {{duration: 0.5, ease: 'circOut',}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false, amount: 0.5}}>
        <thead>
          <tr>
            <th colSpan="2" className="main-category">OPERATING SYSTEM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>OS</td>
            <td>XOS15.1.1, Powered by Android™ 15</td>
          </tr>
        </tbody>
      </motion.table>

      {hr}
    </div>
  );
};

export default SpecificationsTable;