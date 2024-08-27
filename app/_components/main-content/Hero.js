import Image from "next/image";
import Button from "./Button";
import heroProduct from "@/public/hero-product.png";

export default function Hero() {
  return (
    <section className="w-full bg-blue-950 min-h-[1100px] relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <div className="text-center mx-auto">
          <h1 className="block font-medium text-gray-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            MEET THE WORLD'S
            <br />
            BEST SWEETS
          </h1>
        </div>

        <div className="text-center">
          <Button text="Try Oobli" />
        </div>

        <div className="grid grid-cols-3 items-center gap-12 mx-auto max-w-2xl">
          <div className="text-center">
            <div className="flex justify-center items-center size-18 mx-auto">
              <svg
                width="76"
                height="75"
                viewBox="0 0 76 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2623 49.7122H23.0544C23.0544 52.7567 20.5767 55.2343 17.5322 55.2343V57.4423C20.5767 57.4423 23.0544 59.9199 23.0544 62.9644H25.2623C25.2623 59.9199 27.74 57.4423 30.7845 57.4423V55.2343C27.74 55.2343 25.2623 52.7567 25.2623 49.7122ZM24.1607 59.0057C23.5024 57.9131 22.5881 56.9943 21.4956 56.3406C22.5881 55.6823 23.507 54.768 24.1607 53.6755C24.8189 54.768 25.7332 55.6869 26.8257 56.3406C25.7332 56.9989 24.8144 57.9131 24.1607 59.0057Z"
                  fill="#FFEFEC"
                ></path>
                <path
                  d="M36.7282 16.4194C37.6725 16.4194 38.4379 15.6539 38.4379 14.7097C38.4379 13.7654 37.6725 13 36.7282 13C35.784 13 35.0186 13.7654 35.0186 14.7097C35.0186 15.6539 35.784 16.4194 36.7282 16.4194Z"
                  fill="#FFEFEC"
                ></path>
                <path
                  d="M50.4707 40.4267L36.5976 41.6184C34.9952 41.7561 33.8079 43.1666 33.9455 44.7689L35.1373 58.6421C35.275 60.2444 36.6855 61.4318 38.2878 61.2941L52.161 60.1023C53.7633 59.9647 54.9507 58.5542 54.813 56.9518L53.6212 43.0787C53.4836 41.4764 52.073 40.289 50.4707 40.4267Z"
                  fill="#FF9685"
                ></path>
                <path
                  d="M19.9968 45.0088C19.5945 45.0088 19.1922 44.9494 18.7991 44.826C17.7751 44.506 16.9386 43.8066 16.4357 42.8603L9.96274 30.5314C9.46446 29.5806 9.36389 28.4926 9.68388 27.4686C10.0039 26.4446 10.7033 25.6081 11.6495 25.1098L23.9784 18.6368C24.9293 18.1385 26.0127 18.038 27.0366 18.358C28.0606 18.6779 28.8972 19.3774 29.4 20.3236L35.873 32.6525C36.3713 33.6033 36.4719 34.6913 36.1519 35.7153C35.8319 36.7393 35.1325 37.5758 34.1862 38.0741L21.8573 44.5471C21.2722 44.8534 20.6368 45.0088 19.9968 45.0088ZM25.8481 20.3831C25.5601 20.3831 25.2721 20.4516 25.007 20.5933L12.6781 27.0663C12.2484 27.2903 11.9376 27.6698 11.7913 28.1315C11.6496 28.5932 11.6907 29.0823 11.9147 29.512L18.3877 41.8409C18.6117 42.2706 18.9911 42.5814 19.4528 42.7277C19.9145 42.8694 20.4037 42.8283 20.8334 42.6043L33.1622 36.1313C34.0445 35.665 34.3873 34.5725 33.9211 33.6902L27.4481 21.3613C27.2241 20.9316 26.8447 20.6208 26.383 20.4745C26.2047 20.4196 26.0218 20.3922 25.8435 20.3922L25.8481 20.3831Z"
                  fill="#FFEFEC"
                ></path>
                <path
                  d="M58.6886 38.8239C58.2498 38.8239 57.8109 38.7508 57.3858 38.6045L44.2112 34.1017C43.1964 33.7543 42.3781 33.032 41.9027 32.0721C41.4319 31.1075 41.3633 30.0195 41.7062 29.0047L46.2089 15.8301C46.9266 13.7365 49.2123 12.6165 51.306 13.3296L64.4805 17.8324C66.5742 18.5455 67.6987 20.8357 66.981 22.9294L62.4783 36.104C62.1309 37.1188 61.4086 37.9371 60.4486 38.4079C59.8909 38.6822 59.2875 38.8193 58.6841 38.8193L58.6886 38.8239ZM50.0168 15.3227C49.2626 15.3227 48.5586 15.7981 48.3026 16.5478L43.7998 29.7224C43.6444 30.1795 43.6764 30.6687 43.8867 31.1029C44.1015 31.5372 44.4672 31.8618 44.9244 32.0172L58.0989 36.52C58.5561 36.6754 59.0452 36.6434 59.4795 36.4331C59.9138 36.2183 60.2383 35.8526 60.3938 35.3954L64.8965 22.2209C65.2211 21.2792 64.7136 20.246 63.7719 19.926L50.5974 15.4233C50.4054 15.3593 50.2088 15.3273 50.0123 15.3273L50.0168 15.3227Z"
                  fill="#FFEFEC"
                ></path>
              </svg>
            </div>
            <div className="mt-3">
              <p className="mt-1 text-gray-200 text-sm font-semibold">
                Replaces Up To 90% Of Suger
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center size-18 mx-auto">
              <svg
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.9097 24.7513C66.8538 24.7513 67.6192 23.9859 67.6192 23.0418C67.6192 22.0977 66.8538 21.3323 65.9097 21.3323C64.9656 21.3323 64.2002 22.0977 64.2002 23.0418C64.2002 23.9859 64.9656 24.7513 65.9097 24.7513Z"
                  fill="#FFEFEC"
                ></path>
                <path
                  d="M57.9044 27.8047L51.7886 22.8362C48.6027 29.7199 43.3599 35.2964 36.9561 38.9257L43.9175 44.8724C48.6301 48.7348 55.5824 48.0446 59.4448 43.332C63.3072 38.6195 62.617 31.6671 57.9044 27.8047Z"
                  fill="#FF9685"
                ></path>
                <path
                  d="M55.7092 19.8789C57.3273 19.8789 58.4609 19.5635 58.5706 19.5315L57.9581 17.4106C57.9032 17.4289 52.3496 18.9693 48.6015 14.2292L46.8691 15.5959C48.1489 17.2186 49.5888 18.2471 51.0103 18.8916C46.3114 32.3437 33.5815 41.3758 19.3249 41.3758C15.4808 41.3758 11.7098 40.7313 8.12166 39.4606L7.38574 41.5403C11.2116 42.8933 15.2294 43.5835 19.3249 43.5835C29.1523 43.5835 38.2941 39.552 44.8807 32.8328L52.441 39.0263L53.8397 37.3214L46.38 31.2101C49.2779 27.8642 51.5862 23.947 53.1038 19.6C54.0454 19.8103 54.9321 19.8834 55.7092 19.8834V19.8789Z"
                  fill="#FFEFEC"
                ></path>
                <path
                  d="M33.1989 60.9849C33.08 60.9849 32.9612 60.9758 32.8423 60.9575C32.2024 60.8615 31.6402 60.5278 31.2562 60.0068L27.3344 54.7274C26.5391 53.6624 26.2237 52.2957 26.4568 50.9884C26.6945 49.6583 27.4533 48.5247 28.5914 47.7888C30.5158 46.5455 33.0572 46.8837 34.6753 48.5064C36.6956 47.4231 39.2279 47.8299 40.7088 49.576C41.5865 50.609 41.9841 51.9163 41.8287 53.2556C41.6779 54.5765 40.9785 55.7878 39.9089 56.5832L34.6296 60.505C34.209 60.8158 33.7108 60.9804 33.1943 60.9804L33.1989 60.9849ZM31.1557 49.2423C30.6803 49.2423 30.2049 49.3703 29.789 49.6446C29.1719 50.0468 28.756 50.6639 28.628 51.3861C28.4954 52.1083 28.6646 52.8305 29.1034 53.4155L33.0252 58.6949C33.0663 58.7543 33.1212 58.7726 33.1623 58.7772C33.1989 58.7818 33.2583 58.7772 33.3177 58.7406L38.5971 54.8188C39.1867 54.38 39.557 53.7401 39.6393 53.0087C39.7215 52.282 39.5067 51.5689 39.0268 51.0067C38.1354 49.9599 36.5265 49.8137 35.3655 50.6821L34.2365 51.5232L33.3954 50.3896C32.8423 49.6491 32.0013 49.2469 31.1603 49.2469L31.1557 49.2423Z"
                  fill="#FFEFEC"
                ></path>
              </svg>
            </div>
            <div className="mt-3">
              <p className="mt-1 text-gray-200 text-sm font-semibold">
                Rehabilitates Sweet
                <br /> Treats
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center size-18 mx-auto">
              <svg
                width="76"
                height="75"
                viewBox="0 0 76 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2301 14H14.0221C14.0221 17.0445 11.5445 19.5222 8.5 19.5222V21.7301C11.5445 21.7301 14.0221 24.2078 14.0221 27.2523H16.2301C16.2301 24.2078 18.7078 21.7301 21.7523 21.7301V19.5222C18.7078 19.5222 16.2301 17.0445 16.2301 14ZM15.1284 23.2935C14.4702 22.201 13.5559 21.2821 12.4633 20.6284C13.5559 19.9702 14.4747 19.0559 15.1284 17.9633C15.7867 19.0559 16.7009 19.9747 17.7935 20.6284C16.7009 21.2867 15.7821 22.201 15.1284 23.2935Z"
                  fill="#FFEFEC"
                ></path>
                <path
                  d="M65.8161 43.6493C66.7604 43.6493 67.5258 42.8839 67.5258 41.9397C67.5258 40.9954 66.7604 40.23 65.8161 40.23C64.8719 40.23 64.1064 40.9954 64.1064 41.9397C64.1064 42.8839 64.8719 43.6493 65.8161 43.6493Z"
                  fill="#FFEFEC"
                ></path>
                <path
                  d="M56.1929 26.0956C51.6398 21.9266 44.1063 22.3563 39.7452 26.7219L39.0367 27.4305L38.3281 26.7219C33.9625 22.3563 26.4335 21.9266 21.8805 26.0956C16.9251 30.635 16.7972 38.3331 21.4965 43.0324L37.1076 58.6435C38.1727 59.7086 39.9006 59.7086 40.9658 58.6435L55.6077 44.0015L56.5769 43.0324C61.2762 38.3331 61.1482 30.6304 56.1929 26.0956Z"
                  fill="#FF9685"
                ></path>
                <path
                  d="M52.0974 37.7163H49.8894C49.8894 43.3985 45.2632 48.0247 39.5811 48.0247V50.2326C45.2632 50.2326 49.8894 54.8588 49.8894 60.541H52.0974C52.0974 54.8588 56.719 50.2326 62.4057 50.2326V48.0247C56.7235 48.0247 52.0974 43.3985 52.0974 37.7163ZM50.9956 55.4119C49.7385 52.628 47.494 50.3835 44.7146 49.1309C47.4986 47.8738 49.7431 45.6293 50.9956 42.8453C52.2528 45.6293 54.4973 47.8738 57.2767 49.1309C54.4927 50.388 52.2482 52.6326 50.9956 55.4119Z"
                  fill="#FFEFEC"
                ></path>
              </svg>
            </div>
            <div className="mt-3">
              <p className="mt-1 text-gray-200 text-sm font-semibold">
                Helps Stabilize Blood
                <br /> Sugar
              </p>
            </div>
          </div>
        </div>
      </div>

      <svg
        preserveAspectRatio="none"
        className="absolute z-20 bottom-0 left-0 max-h-[180px] lg:max-h-[230px]"
        width="100%"
        height="auto"
        viewBox="0 0 375 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_11193_16504)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M367.59 6.36328C367.789 6.46457 367.993 6.56871 368.209 6.67717H368.235C372.385 8.75865 375 13.0017 375 17.645V207.033C375 211.783 373.372 216.386 370.397 220.082C368.289 222.711 366.02 225.259 363.659 227.714C363.608 227.772 363.558 227.83 363.508 227.888C363.29 228.141 363.07 228.396 362.831 228.635C345.179 246.514 320.575 258.549 287.631 248.769C208.588 225.312 239.49 140.292 239.49 140.292L235.101 138.691C235.101 138.691 220.103 185.511 173.657 168.646C129.426 152.581 142.675 82.8513 146.251 68.1341C149.827 53.4037 172.977 -10.6818 223.359 1.54019C273.395 13.6955 257.49 72.8975 257.49 72.8975L261.88 74.4987C261.88 74.4987 279.279 -1.75549 343.177 0.499447C350.102 0.75296 356.4 2.03387 362.164 4.04863C365.001 5.04518 366.149 5.62965 367.59 6.36328ZM85.7375 3.3433L85.7372 3.34317C85.6988 3.32926 85.6601 3.31522 85.6208 3.30119C85.1805 3.16776 84.7402 3.03433 84.2865 2.91425C84.108 2.86136 83.9263 2.80847 83.7445 2.75559L83.7395 2.75413L83.7344 2.75268C83.5527 2.69979 83.3709 2.64691 83.1924 2.59402C82.9858 2.54071 82.7759 2.4874 82.566 2.43409C82.3557 2.38066 82.1452 2.32723 81.9382 2.27379C81.5246 2.16705 81.1109 2.07365 80.6973 1.98025C80.3544 1.90024 80.0017 1.83002 79.6561 1.76121L79.6551 1.76101L79.4831 1.72674C79.0294 1.63334 78.5758 1.55328 78.1088 1.47322C77.7227 1.40666 77.3234 1.3401 76.924 1.27354L76.9213 1.27308C76.4276 1.19302 75.9206 1.12631 75.4135 1.0596L75.2891 1.04178C74.9595 0.994498 74.6381 0.948394 74.3061 0.912825C73.7325 0.846124 73.1455 0.792761 72.5586 0.7394L72.5582 0.739369C72.4482 0.730199 72.3397 0.719453 72.2317 0.708756C72.0255 0.688324 71.821 0.66807 71.6108 0.659312C70.7169 0.592598 69.7962 0.539227 68.8756 0.512541H68.8489C67.6347 0.472512 66.4605 0.45917 65.2864 0.472513H64.5792C63.445 0.499198 62.3242 0.539226 61.2301 0.605941C61.0967 0.605941 60.9633 0.617801 60.8299 0.629661C60.7632 0.635591 60.6964 0.641521 60.6297 0.645969C59.589 0.726026 58.5616 0.819426 57.5609 0.939511C57.5009 0.946182 57.4375 0.952854 57.3741 0.959525C57.3107 0.966196 57.2473 0.972868 57.1873 0.979539C56.1198 1.11297 55.0658 1.27308 54.0117 1.44654L53.3312 1.56662C52.3038 1.75342 51.2898 1.95356 50.289 2.18039C50.1423 2.20708 50.0089 2.24711 49.8754 2.28713C48.9548 2.50062 48.0475 2.74079 47.1535 2.9943C47.0601 3.02099 46.97 3.04434 46.8799 3.06769C46.7899 3.09104 46.6998 3.11439 46.6064 3.14107C45.6591 3.42127 44.7251 3.71481 43.8044 4.0217C43.5911 4.08836 43.3778 4.16834 43.1645 4.24833L43.164 4.24853C42.23 4.5821 41.3093 4.91567 40.402 5.27592C40.3753 5.28928 40.3452 5.30264 40.3152 5.316L40.3144 5.31636C40.2847 5.32957 40.255 5.34277 40.2286 5.35598C39.3613 5.70289 38.5207 6.07649 37.6934 6.46343C37.5932 6.51019 37.4897 6.55694 37.3862 6.60369L37.3834 6.60496C37.281 6.65118 37.1787 6.69741 37.0797 6.74363C36.2391 7.13057 35.4118 7.5442 34.6112 7.97117C34.5468 8.00556 34.4837 8.03856 34.4215 8.07107L34.421 8.07134C34.2904 8.13965 34.164 8.2058 34.0375 8.27806C33.3036 8.665 32.5831 9.06528 31.876 9.47891C31.8093 9.51894 31.7426 9.55563 31.6758 9.59232L31.6747 9.5929C31.6084 9.6294 31.542 9.66592 31.4757 9.70574C30.7018 10.1594 29.9413 10.6397 29.1807 11.1201C29.074 11.1868 28.9672 11.2568 28.8605 11.3269C28.7537 11.3969 28.647 11.467 28.5403 11.5337C27.8064 12.014 27.0859 12.5077 26.3787 13.0148C26.292 13.0748 26.2086 13.1382 26.1252 13.2016C26.0418 13.2649 25.9584 13.3283 25.8717 13.3884C25.2713 13.8287 24.6708 14.269 24.0971 14.7226C24.0037 14.796 23.9103 14.8661 23.8169 14.9361C23.7235 15.0062 23.6301 15.0762 23.5367 15.1496C22.87 15.6696 22.23 16.203 21.5899 16.7363L21.5887 16.7374C21.4819 16.8308 21.3752 16.9209 21.2684 17.0109C21.1617 17.101 21.0549 17.1911 20.9482 17.2845C20.3611 17.7915 19.774 18.3118 19.2003 18.8456C19.0747 18.9532 18.9552 19.0668 18.8336 19.1824C18.7743 19.2388 18.7145 19.2957 18.6533 19.3526C18.1462 19.8329 17.6392 20.3133 17.1455 20.7936C17.0388 20.8937 16.9354 20.9971 16.832 21.1005C16.7285 21.2039 16.6251 21.3073 16.5184 21.4074C15.958 21.9678 15.4109 22.5282 14.8772 23.1019C14.7772 23.2087 14.6738 23.3187 14.5703 23.4288C14.4669 23.5389 14.3635 23.649 14.2635 23.7557C13.8365 24.2227 13.4095 24.6897 12.9959 25.1567C12.8958 25.2701 12.7924 25.3869 12.689 25.5036L12.6671 25.5284C12.571 25.6369 12.4751 25.7451 12.3821 25.8505L12.273 25.9764C11.9602 26.3371 11.6401 26.7063 11.3414 27.0647C11.3014 27.1048 11.2747 27.1448 11.248 27.1848C8.92633 29.9735 6.80484 32.8288 4.87012 35.7109C1.70789 40.4342 0 45.9715 0 51.6422V236C0 240.857 3.02881 245.206 7.60541 246.847C9.43338 247.501 11.3414 248.128 13.3028 248.715H13.3295C14.4903 249.062 15.6511 249.369 16.7852 249.663C17.0374 249.728 17.2895 249.787 17.5461 249.848C17.6562 249.875 17.7672 249.902 17.8794 249.93L18.3336 250.036C18.9786 250.187 19.6165 250.336 20.2544 250.477L21.4552 250.717L21.6415 250.752C22.3514 250.887 23.0518 251.02 23.7635 251.131C24.1238 251.197 24.484 251.251 24.8443 251.304C25.845 251.464 26.8457 251.598 27.8331 251.704C27.8954 251.704 27.9577 251.716 28.02 251.728C28.0511 251.734 28.0822 251.74 28.1133 251.744C29.1941 251.864 30.2615 251.958 31.3156 252.024C31.6232 252.05 31.9431 252.063 32.2516 252.076L32.2896 252.078C32.9758 252.115 33.6737 252.141 34.3505 252.166H34.3508L34.4911 252.171C34.6771 252.171 34.8597 252.175 35.0423 252.178L35.0449 252.178C35.1471 252.18 35.2493 252.182 35.352 252.183C35.4337 252.184 35.5158 252.185 35.5986 252.185C36.3058 252.185 36.9996 252.185 37.6934 252.171C38.027 252.171 38.3739 252.171 38.7075 252.145C39.5748 252.118 40.4287 252.065 41.2827 251.998C41.4294 251.998 41.5762 251.984 41.7096 251.971C42.697 251.891 43.671 251.784 44.6451 251.664C44.7916 251.644 44.9349 251.624 45.0782 251.604C45.1744 251.591 45.2705 251.577 45.3677 251.564C45.4156 251.557 45.4638 251.551 45.5123 251.544C46.1928 251.451 46.8733 251.344 47.5538 251.224C47.9007 251.171 48.2343 251.104 48.5678 251.037C49.2083 250.917 49.8354 250.784 50.4625 250.65C50.7827 250.583 51.103 250.517 51.4099 250.437C52.157 250.263 52.9042 250.076 53.6381 249.876C53.8116 249.823 53.985 249.783 54.1584 249.743C55.0524 249.489 55.9464 249.222 56.827 248.929C57.0805 248.849 57.334 248.755 57.6009 248.662C58.228 248.449 58.8551 248.235 59.4689 247.995C59.7891 247.875 60.096 247.755 60.4029 247.635C60.9766 247.408 61.537 247.181 62.1108 246.941C62.4043 246.821 62.7112 246.687 63.0047 246.554C63.6452 246.274 64.2856 245.98 64.9128 245.673C65.1129 245.58 65.313 245.487 65.4998 245.393C66.3138 244.993 67.1143 244.593 67.9016 244.166C68.1417 244.045 68.3686 243.912 68.5954 243.779C69.1558 243.472 69.7295 243.152 70.2899 242.831C70.4367 242.745 70.5801 242.658 70.7236 242.571C70.867 242.484 71.0104 242.398 71.1572 242.311C71.6642 242.004 72.1713 241.697 72.6649 241.377C72.8051 241.29 72.9451 241.2 73.0852 241.11L73.0877 241.108C73.227 241.019 73.3662 240.929 73.5055 240.843C74.0526 240.483 74.5996 240.123 75.1334 239.749C75.2334 239.676 75.3369 239.606 75.4402 239.536C75.5436 239.466 75.6471 239.396 75.7471 239.322C76.4676 238.815 77.1881 238.295 77.8953 237.761C78.0015 237.681 78.1044 237.602 78.2073 237.522L78.2128 237.518C78.3149 237.439 78.417 237.36 78.5224 237.281C79.0294 236.894 79.5365 236.507 80.0302 236.107L80.8307 235.466C80.9723 235.35 81.1139 235.233 81.2555 235.115C81.3344 235.05 81.4133 234.984 81.4922 234.918C81.712 234.735 81.9319 234.552 82.1517 234.372C82.4185 234.145 82.672 233.932 82.9389 233.705C83.4059 233.305 83.8596 232.891 84.3132 232.477L84.3134 232.477L84.3136 232.477C84.5269 232.29 84.7403 232.104 84.9537 231.904C85.5931 231.317 86.2191 230.718 86.8452 230.119L86.8463 230.118L86.8484 230.116C87.0352 229.929 87.222 229.742 87.4221 229.555C87.5956 229.382 87.769 229.212 87.9424 229.041C88.1159 228.871 88.2894 228.701 88.4628 228.528C88.4895 228.501 88.5162 228.461 88.5562 228.421C114.748 201.802 125.569 162.321 125.569 162.321C143.489 94.4726 134.616 19.1925 86.1545 3.38124L86.1678 3.48799C86.0205 3.44588 85.8814 3.39546 85.7375 3.3433ZM140.26 1.79786C124.996 1.97132 118.671 9.26984 118.911 18.0761C119.165 26.8823 130.453 41.7062 141.381 41.5728C152.308 41.4393 162.756 26.3753 162.502 17.5557C162.262 8.76281 155.524 1.62441 140.26 1.79786Z"
            fill="#FFEFEC"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_11193_16504">
            <rect
              width="375"
              height="59.8958"
              fill="white"
              transform="matrix(-1 0 0 1 375 0)"
            ></rect>
          </clipPath>
        </defs>
      </svg>

      <div className="relative max-w-[432px] mx-auto z-0">
        <Image
          src={heroProduct}
          alt="Cocoa Dreams"
          className="bottom-0 ml-20"
        />
      </div>
    </section>
  );
}
