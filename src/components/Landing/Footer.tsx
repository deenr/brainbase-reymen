export function Footer() {
  return (
    <footer className="flex flex-col gap-12 md:flex-row justify-between items-start md:items-center py-12 px-4 md:px-12 lg:px-28 bg-gray-800 ">
      <svg className="w-32 text-white" viewBox="0 0 938 337" fill="currentColor">
        <path d="M76.5498 117.03C90.8498 117.03 101.83 112.5 108.11 106.05C112.47 101.69 116.65 94.1901 116.65 83.2001C116.65 73.9601 113.51 66.4601 108.8 61.9301C105.14 58.4401 99.0398 55.6501 92.9298 54.9501C97.2898 53.0301 99.8998 50.4201 102.35 45.8801C104.79 41.0001 105.67 36.6401 105.67 31.5801C105.67 21.2901 102.53 14.1401 98.5198 9.78006C91.3698 1.93006 81.4298 0.710056 73.0598 0.710056H28.0698V117.03H76.5498ZM58.2398 23.9101H63.8198C69.7498 23.9101 73.4098 25.4801 75.3298 27.4001C77.0798 29.3201 78.1198 32.2801 78.1198 35.2501C78.1198 37.8701 77.2498 41.0001 75.3298 42.9201C72.1898 46.2401 66.9598 46.5801 63.8198 46.5801H58.2398V23.9101ZM58.2398 69.0801H64.5198C72.0198 69.0801 79.5198 69.2501 83.1798 72.9201C84.9298 74.6601 86.1498 77.6301 86.1498 81.2901C86.1498 84.6001 85.0998 87.2201 83.7098 88.7901C80.3998 92.6301 73.4198 93.5001 65.0498 93.5001H58.2498V69.0901L58.2398 69.0801ZM134.29 0.720058V117.04H164.46V72.4001L193.41 117.04H230.9L194.45 69.4301C199.86 68.3801 205.96 65.7701 210.5 61.4101C216.25 55.8301 219.74 47.1101 219.74 37.1701C219.74 27.9301 216.42 17.8101 209.8 11.0101C201.25 2.12006 190.09 0.720058 181.38 0.720058H134.29ZM164.45 24.0901H170.21C176.83 24.0901 181.89 25.8301 184.68 28.6201C187.29 31.0601 188.69 34.9001 188.69 38.3901C188.69 42.0501 187.12 45.8901 184.85 48.1501C181.19 51.6401 174.74 52.8601 170.2 52.8601H164.44V24.0901H164.45ZM325.85 117.03H358.11L314.34 0.710056H281.38L236.74 117.03H268.65L276.5 97.5001H318.7L325.85 117.03ZM284.87 74.4801L297.6 36.8101L310.68 74.4801H284.87ZM369.33 0.720058V117.04H399.5V0.720058H369.33ZM453.56 117.03V45.8801L509.19 117.03H539.36V0.720058H509.19V71.8701L453.56 0.720058H423.39V117.04H453.56V117.03ZM731.04 102.88V65.3701C731.04 58.7801 730.66 53.9801 729.91 50.9701C729.15 47.9601 727.69 45.1501 725.51 42.5501C723.33 39.9501 720.03 37.8301 715.59 36.1901C711.15 34.5401 705.89 33.7201 699.81 33.7201C683.23 33.7201 671.56 40.0301 664.81 52.6401L680.05 56.6601C683.62 50.3001 689.4 47.1101 697.38 47.1101C702.01 47.1101 705.77 48.0001 708.64 49.7901C711.51 51.5801 713.34 53.5801 714.12 55.8201C714.9 58.0501 715.29 61.2401 715.29 65.3701V73.4101C708.2 68.8301 700.86 66.5401 693.27 66.5401C685.12 66.5401 678.16 69.0201 672.38 73.9901C666.6 78.9601 663.71 85.2101 663.71 92.7501C663.71 100.29 666.43 106.37 671.87 111.17C677.31 115.97 683.72 118.37 691.09 118.37C700.58 118.37 709.18 114.63 716.88 107.15V117.03H744.68V102.88H731.03H731.04ZM715.3 96.3501C708.43 102.82 701.15 106.06 693.45 106.06C688.98 106.06 685.45 104.78 682.86 102.21C680.26 99.6401 678.97 96.4601 678.97 92.6601C678.97 88.5801 680.45 85.2601 683.41 82.6901C686.37 80.1201 690.05 78.8401 694.46 78.8401C701.49 78.8401 708.44 81.5201 715.31 86.8801V96.3401L715.3 96.3501ZM767.87 117.03V112.47C773.34 116.4 780.4 118.37 789.05 118.37C798.26 118.37 805.76 116.15 811.53 111.71C817.31 107.27 820.2 101.28 820.2 93.7401C820.2 88.6601 818.87 84.2101 816.22 80.3801C813.57 76.5601 810.23 73.8201 806.21 72.1701C802.19 70.5201 796.25 69.0901 788.38 67.8701C780.17 66.5901 774.83 65.3801 772.34 64.2301C769.86 63.0901 768.61 60.9801 768.61 57.9101C768.61 54.8401 769.96 52.4801 772.67 50.6701C775.38 48.8601 778.83 47.9501 783.01 47.9501C791.22 47.9501 797.47 51.2701 801.77 57.9101V62.8501H815.92V35.9701H801.77V39.4401C796.25 36.2901 789.66 34.7201 782.01 34.7201C773.53 34.7201 766.69 37.0001 761.5 41.5501C756.31 46.1001 753.71 51.7601 753.71 58.5201C753.71 65.2801 756.09 70.6901 760.87 74.9001C765.64 79.1201 773.61 82.1701 784.78 84.0501C792.32 85.2701 797.36 86.6101 799.9 88.0601C802.44 89.5101 803.71 91.7701 803.71 94.8401C803.71 97.9101 802.17 100.51 799.1 102.29C796.03 104.08 791.93 104.97 786.79 104.97C781.65 104.97 777.62 103.74 774.02 101.29C770.42 98.8301 768.37 95.7101 767.87 91.9101V89.2301H753.64V117.03H767.87ZM902.01 45.4801C893.16 37.6401 883.3 33.7201 872.41 33.7201C861.52 33.7201 851.46 37.7401 842.89 45.7801C834.32 53.8201 830.04 64.0601 830.04 76.5101C830.04 89.6301 834.44 100.05 843.23 107.78C852.02 115.51 862.61 119.38 875.01 119.38C882.99 119.38 890.64 117.66 897.96 114.23C905.27 110.8 911.22 105.54 915.79 98.4501L901.72 92.2501C895.24 101.18 886.45 105.65 875.34 105.65C867.69 105.65 861.41 103.33 856.5 98.7001C851.59 94.0701 848.63 88.0101 847.62 80.5301H915.78C915.45 65.0101 910.85 53.3301 902.01 45.4901V45.4801ZM848.21 68.9701C849.21 62.3801 851.98 57.0101 856.5 52.8501C861.02 48.6901 866.47 46.6101 872.83 46.6101C879.81 46.6101 885.69 48.9101 890.5 53.5201C895.3 58.1301 898.26 63.2801 899.38 68.9701H848.22H848.21ZM652.56 75.5901C652.56 87.6501 648.86 97.7901 641.46 106.03C634.06 114.26 624.59 118.38 613.03 118.38C606.55 118.38 600.64 116.99 595.28 114.19C589.92 111.4 586.07 108.3 583.72 104.9V117.04H553.74V102.89H568.14V0.560059H583.71V47.4501C591.69 38.3001 601.49 33.7201 613.1 33.7201C624.71 33.7201 633.63 37.5601 641.19 45.2301C648.75 52.9101 652.54 63.0201 652.54 75.5801L652.56 75.5901ZM635.9 75.1701C635.9 66.6301 633.35 60.0001 628.24 55.2801C623.13 50.5601 617.14 48.2001 610.28 48.2001C603.42 48.2001 597.5 50.6401 592.19 55.5301C586.89 60.4201 584.23 67.4601 584.23 76.6701C584.23 85.1001 586.81 91.7801 591.98 96.7201C597.14 101.66 603.1 104.13 609.86 104.13C616.95 104.13 623.06 101.51 628.2 96.2601C633.34 91.0101 635.9 83.9801 635.9 75.1601V75.1701Z" />
        <path d="M937.68 144.78V336.68H0.319824V144.78H937.68ZM75.0198 313.42V266.77L75.8898 266.33C76.5498 268.73 77.1998 269.38 77.8498 270.91L98.7698 313.42H159.59L126.89 264.38C124.93 261.33 122.09 259.15 119.26 257.62V256.31C127.76 254.57 134.95 250.21 139.31 244.76C143.45 239.75 147.38 231.68 147.38 218.82C147.38 201.6 141.06 190.48 133.65 183.07C120.35 169.77 104.44 168.03 89.1798 168.03H23.5698V313.42H75.0098H75.0198ZM75.0198 207.92H84.1798C88.5398 207.92 91.3698 209.88 93.1198 211.84C95.0798 214.02 95.9598 217.29 95.9598 220.56C95.9598 225.14 93.9998 227.97 92.2498 229.5C88.9798 232.34 84.1898 232.77 81.1298 232.77H75.0198V207.92ZM273.37 313.42V273.53H226.72V259.58H267.92V221.43H226.72V207.92H272.06V168.03H173.97V313.42H273.37ZM331.35 250.86V313.42H383.45V250.86L433.15 168.03H373.64L362.3 194.62C360.99 197.89 359.47 200.07 358.38 206.17H356.85C355.54 200.72 353.8 196.58 352.93 194.62L340.51 168.03H280.78L331.35 250.86ZM480.09 313.42L487.28 245.19C487.5 242.35 487.5 236.69 487.5 233.85H489.03C489.25 239.96 490.34 244.53 491.86 249.76L511.26 313.41H542.21L563.79 246.05C564.66 243.22 565.97 237.55 566.62 233.84H567.49C567.49 239.95 567.92 243.22 568.36 248.23L574.9 313.41H625.69L601.93 168.02H548.09L531.09 227.53C529.35 233.64 528.48 238 528.26 244.32H526.95C526.73 242.36 525.86 235.16 523.68 227.53L506.68 168.02H452.4L428.86 313.41H480.08L480.09 313.42ZM745.14 313.42V273.53H698.49V259.58H739.69V221.43H698.49V207.92H743.83V168.03H645.74V313.42H745.14ZM819.39 313.42V263.94C819.39 257.4 817.65 244.98 816.12 237.13H817.64C820.47 243.24 824.4 250.87 827.67 256.1L863.85 313.43H914.42V168.04H863.85V214.25C863.85 224.93 866.25 239.53 868.43 248.69H866.9C862.11 237.35 858.62 231.69 853.17 222.97L819.38 168.04H769.03V313.43H819.38L819.39 313.42Z" />
      </svg>
      <p className="text-sm font-normal text-gray-400">
        <span className="whitespace-nowrap">&#xa9; 2024 BRAINbase Reymen.</span> <span className="whitespace-nowrap">Alle rechten voorbehouden</span>
      </p>
    </footer>
  );
}
