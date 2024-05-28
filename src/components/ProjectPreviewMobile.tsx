import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog';

export function ProjectPreviewMobile(
  props: Readonly<{
    projectOmschrijving: string;
    image: string;
    bouwheer: string;
    architect: string;
    aannemer?: string;
    heeftVoorstudie?: boolean;
    heeftUitvoeringsplannen?: boolean;
    heeftWerfopvolging?: boolean;
  }>
) {
  const { projectOmschrijving, image, bouwheer, architect, aannemer, heeftVoorstudie, heeftUitvoeringsplannen, heeftWerfopvolging } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <picture
          className="relative h-full flex flex-row justify-between flex-1 bg-cover bg-center p-6"
          style={{
            backgroundImage: `url(${image})`
          }}
        >
          <div className="absolute z-0 opacity-80 inset-0 bg-gradient-to-b from-transparent to-gray-950"></div>
          <div className="relative z-10 flex flex-col justify-end">
            <p className="text-base text-gray-100 font-light">{projectOmschrijving}</p>
          </div>
          <div className="relative z-10 flex flex-col justify-between items-end">
            <div aria-label="open project details" className="bg-primair-500 w-fit text-white font-bold py-3 px-3 rounded-full flex items-center text-md font-semibold	 ">
              <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.05033 16.9497L16.9498 7.05025M16.9498 7.05025H7.05033M16.9498 7.05025V16.9497" />
              </svg>
            </div>
          </div>
        </picture>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogDescription>{projectOmschrijving}</DialogDescription>
        </DialogHeader>
        <picture
          className="w-full h-80 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`
          }}
        />
        <div className="grid grid-cols-2 gap-2">
          {bouwheer && <TitleDescription title="Bouwheer" description={bouwheer} />}
          {architect && <TitleDescription title="Architect" description={architect} />}
          {aannemer && <TitleDescription title="Aannemer" description={aannemer} />}
        </div>
        {(heeftVoorstudie || heeftWerfopvolging || heeftUitvoeringsplannen) && (
          <div>
            <h3 className="text-lg font-semibold">Categorieën</h3>
            <div className="flex flex-row flex-wrap gap-2 mt-1">
              {heeftVoorstudie && (
                <div aria-label="open project details" className="bg-primair-500 w-fit text-white py-1 px-3 rounded-full flex items-center text-sm font-medium">
                  <svg className="mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.0773 16.5897C15.3594 16.5897 17 14.1282 17 11.6666V1L1.41066 1V5.92306M1 17L5.55325 15.2488C5.84448 15.1367 5.9901 15.0807 6.12633 15.0076C6.24735 14.9427 6.36271 14.8677 6.47121 14.7835C6.59337 14.6887 6.70369 14.5784 6.92433 14.3577L12.8976 8.38459C13.804 7.47828 13.804 6.00886 12.8976 5.10255C11.9913 4.19624 10.5219 4.19624 9.61559 5.10255L3.64228 11.0757C3.42164 11.2963 3.31132 11.4066 3.21653 11.5288C3.13233 11.6373 3.05736 11.7527 2.9924 11.8737C2.91927 12.0099 2.86326 12.1555 2.75125 12.4468L1 17ZM1 17L2.68871 12.6094C2.80956 12.2952 2.86998 12.1381 2.97361 12.0662C3.06418 12.0033 3.17625 11.9795 3.28455 12.0002C3.40848 12.0239 3.52749 12.1429 3.76553 12.3809L5.61914 14.2345C5.85717 14.4725 5.97618 14.5916 5.99985 14.7155C6.02053 14.8238 5.99675 14.9358 5.93386 15.0264C5.86191 15.1301 5.70481 15.1905 5.39062 15.3113L1 17Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Voorstudie
                </div>
              )}
              {heeftWerfopvolging && (
                <div aria-label="open project details" className="bg-primair-500 w-fit text-white py-1 px-3 rounded-full flex items-center text-sm font-medium">
                  <svg className="mr-2" width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.67852 12.7488C1.60486 12.769 1.52068 12.7892 1.43966 12.8146C0.213758 13.2013 -0.103622 13.4777 0.845531 14.2976C1.35694 14.7391 1.97252 15.1106 2.60388 15.3768C5.35874 16.5399 8.26723 16.8993 11.2421 16.6391C12.1259 16.5612 12.9941 16.22 13.8432 15.9285C14.725 15.6261 14.0869 14.7482 13.3761 14.7867C12.3111 14.8453 11.1516 15.4769 10.0856 15.5346C9.72885 15.5538 9.58684 15.4222 9.59629 15.0659C9.63204 13.6325 9.65834 11.6069 9.78045 10.1816C9.98144 7.82905 10.8221 5.71333 12.7037 4.09263C14.8514 2.24315 17.9167 2.25733 19.9475 4.10985C20.782 4.8711 21.4218 5.79027 21.6301 6.86027C21.8627 8.05884 21.9195 9.29589 21.9731 10.5197C22.03 11.8307 22.0215 11.8985 20.7967 12.433C19.2551 13.1062 18.9756 13.1632 17.39 13.7361C16.9974 13.8778 16.7944 14.0338 16.8427 14.4467C16.9092 15.0088 16.7665 15.2809 17.4646 15.0025C19.3545 14.2514 19.9422 14.0344 21.8079 13.2307C22.3688 12.9888 22.8612 12.5686 23.3285 12.1688C23.7326 11.8226 23.8441 11.2152 23.519 10.8862C23.0633 10.4266 23.1222 9.90733 23.1338 9.38189C23.1696 7.71465 22.8623 6.13344 21.9837 4.67167C19.9433 1.27742 15.6889 0.364319 12.3816 2.65212C9.86879 4.39025 8.74392 6.87748 8.51663 9.75748C8.40193 11.2162 8.39583 13.5222 8.39583 14.989C8.39583 15.4216 8.05505 15.5346 7.635 15.4354C7.24957 15.3443 6.85119 15.2476 6.50102 15.166C6.20756 15.0976 6.05879 14.8403 6.05963 14.5197C6.06847 11.1441 6.18114 7.71766 7.21032 5.66663C8.51662 3.06334 9.61881 1.77241 12.3375 0.724077C13.3675 0.326874 12.2023 -0.0344803 10.6284 0.724093C7.21032 2.37147 6.18663 4.69777 5.50127 7.31409C4.97871 9.30896 4.92558 11.9962 4.92021 14.1591C4.91931 14.5197 4.61764 14.6769 4.41982 14.5922C3.96151 14.3961 3.64862 14.2777 3.16013 14.0374C3.04438 13.9807 2.91527 13.7985 2.91811 13.6912C2.95809 12.1758 2.89852 9.73421 3.12161 8.24206C3.42992 6.17798 3.65883 4.95628 4.79819 3.30876C5.36787 2.48501 6.05839 1.84895 6.68783 1.27006C7.42445 0.592604 6.6966 0.501873 5.50127 1.27006C3.12161 2.79939 2.23331 5.66658 1.87992 8.10338C1.70419 9.3151 1.73745 11.4651 1.67958 12.7518L1.67852 12.7488Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.67958 12.7518C1.67963 12.7506 1.67968 12.7495 1.67973 12.7484C1.68394 12.6544 1.68767 12.5559 1.69102 12.4535C1.70241 12.1064 1.70958 11.7145 1.71707 11.3053C1.73764 10.1814 1.76061 8.9261 1.87992 8.10338C2.23331 5.66658 3.12161 2.79939 5.50127 1.27006C6.6966 0.501873 7.42445 0.592604 6.68783 1.27006C6.05839 1.84895 5.36787 2.48501 4.79819 3.30876C3.65883 4.95628 3.42992 6.17798 3.12161 8.24206C2.95848 9.3332 2.94649 10.932 2.93619 12.3052C2.93241 12.8098 2.92886 13.284 2.91811 13.6912C2.91527 13.7985 3.04438 13.9807 3.16013 14.0374C3.52224 14.2156 3.78785 14.3267 4.08773 14.4522C4.1924 14.496 4.30124 14.5415 4.41982 14.5922C4.61764 14.6769 4.91931 14.5197 4.92021 14.1591C4.92558 11.9962 4.97871 9.30896 5.50127 7.31409C6.18663 4.69777 7.21032 2.37147 10.6284 0.724093C12.2023 -0.0344803 13.3675 0.326874 12.3375 0.724077C9.61881 1.77241 8.51662 3.06334 7.21032 5.66663C6.18114 7.71766 6.06847 11.1441 6.05963 14.5197C6.05879 14.8403 6.20756 15.0976 6.50102 15.166C6.70587 15.2137 6.92723 15.2666 7.15284 15.3206C7.31288 15.3588 7.47505 15.3976 7.635 15.4354C8.05505 15.5346 8.39583 15.4216 8.39583 14.989C8.39583 13.5222 8.40193 11.2162 8.51663 9.75748C8.74392 6.87748 9.86879 4.39025 12.3816 2.65212C15.6889 0.364319 19.9433 1.27742 21.9837 4.67167C22.8623 6.13344 23.1696 7.71465 23.1338 9.38189C23.1328 9.42641 23.1315 9.47087 23.1302 9.51527C23.1159 9.99489 23.1019 10.4656 23.519 10.8862C23.8441 11.2152 23.7326 11.8226 23.3285 12.1688C22.8612 12.5686 22.3688 12.9888 21.8079 13.2307C20.2989 13.8808 19.6259 14.147 18.4236 14.6225C18.1395 14.7349 17.8259 14.8589 17.4646 15.0025C16.893 15.2305 16.8851 15.0893 16.8645 14.7221C16.8599 14.6408 16.8548 14.5485 16.8427 14.4467C16.7944 14.0338 16.9974 13.8778 17.39 13.7361C17.7762 13.5966 18.085 13.4876 18.3534 13.3929C19.1867 13.0988 19.6306 12.9422 20.7967 12.433C22.0215 11.8985 22.03 11.8307 21.9731 10.5197C21.9195 9.29589 21.8627 8.05884 21.6301 6.86027C21.4218 5.79027 20.782 4.8711 19.9475 4.10985C17.9167 2.25733 14.8514 2.24315 12.7037 4.09263C10.8221 5.71333 9.98144 7.82905 9.78045 10.1816C9.6793 11.3623 9.6439 12.9548 9.6144 14.2815C9.60829 14.5564 9.60243 14.8199 9.59629 15.0659C9.58684 15.4222 9.72885 15.5538 10.0856 15.5346C10.6192 15.5057 11.1763 15.333 11.7331 15.1604C12.2888 14.9882 12.8442 14.816 13.3761 14.7867C14.0869 14.7482 14.725 15.6261 13.8432 15.9285C13.7263 15.9686 13.609 16.0097 13.4913 16.051C12.7546 16.309 12.0042 16.5719 11.2421 16.6391C8.26723 16.8993 5.35874 16.5399 2.60388 15.3768C1.97252 15.1106 1.35694 14.7391 0.845531 14.2976C-0.103622 13.4777 0.213758 13.2013 1.43966 12.8146C1.49492 12.7973 1.55166 12.7824 1.60552 12.7682C1.62726 12.7625 1.64853 12.7569 1.66905 12.7513C1.67222 12.7505 1.67539 12.7496 1.67852 12.7488L1.67958 12.7518ZM1.39674 12.5336C1.40985 12.1682 1.41752 11.7487 1.42561 11.306C1.43104 11.009 1.43666 10.7015 1.44424 10.3928C1.4651 9.54422 1.50084 8.68857 1.59133 8.06458C1.94675 5.61379 2.84906 2.63722 5.33951 1.0367C5.65107 0.836467 5.93776 0.688527 6.1838 0.591194C6.42106 0.497338 6.64903 0.438978 6.83335 0.447714C6.92399 0.45201 7.04993 0.474645 7.15013 0.564715C7.26649 0.669314 7.28927 0.809248 7.26831 0.924586C7.24939 1.02873 7.19513 1.12442 7.1354 1.20588C7.07303 1.29093 6.98997 1.38018 6.88909 1.47295C6.25762 2.05372 5.59005 2.66996 5.04073 3.46427C3.93926 5.05698 3.71716 6.22586 3.41003 8.28201C3.24996 9.35264 3.23821 10.9172 3.22795 12.2846C3.22416 12.7881 3.22058 13.2649 3.20987 13.6805C3.21437 13.6913 3.22295 13.7075 3.23602 13.7261C3.2492 13.7449 3.26376 13.7616 3.27699 13.7741C3.28753 13.784 3.29358 13.7878 3.29403 13.7882C3.64675 13.9617 3.9016 14.0683 4.19853 14.1926C4.30303 14.2363 4.41273 14.2822 4.53375 14.334C4.53723 14.334 4.54897 14.333 4.5669 14.3198C4.58899 14.3035 4.62857 14.2594 4.62882 14.1585C4.63418 12.0012 4.68597 9.27926 5.21873 7.24547C5.56426 5.92642 6.00128 4.65448 6.79735 3.5005C7.59645 2.34212 8.74705 1.31708 10.498 0.4732C11.3176 0.0782 12.062 -0.0422483 12.4972 0.0124604C12.6055 0.0260812 12.7218 0.0536886 12.8179 0.111021C12.919 0.171355 13.0418 0.298325 13.0151 0.487702C12.9935 0.640279 12.8818 0.743156 12.8003 0.802581C12.7081 0.869817 12.5875 0.929906 12.4459 0.984536C11.1141 1.49807 10.1972 2.06335 9.45424 2.80678C8.7076 3.55392 8.12143 4.49584 7.4727 5.78869C6.98063 6.76931 6.6992 8.09933 6.54232 9.62413C6.38589 11.1446 6.35544 12.8335 6.35102 14.5204C6.35038 14.764 6.45377 14.8663 6.56953 14.8933C6.77473 14.9411 6.9981 14.9945 7.22476 15.0487C7.38469 15.0869 7.54631 15.1255 7.70444 15.1629C7.88264 15.205 7.98968 15.1875 8.03701 15.1635C8.05599 15.1538 8.0685 15.1421 8.07862 15.1237C8.09002 15.103 8.10444 15.0623 8.10444 14.989C8.10444 13.5255 8.11037 11.2078 8.22607 9.7363C8.45826 6.79421 9.61319 4.22158 12.2116 2.42426C15.661 0.0381324 20.1106 0.99566 22.2359 4.53112C23.1474 6.04761 23.4617 7.68252 23.4251 9.38769C23.4242 9.42938 23.4231 9.47028 23.4221 9.51009C23.409 10.0058 23.3997 10.3596 23.7297 10.6925C23.9695 10.935 24.033 11.2644 23.9852 11.5637C23.9373 11.8635 23.7756 12.1612 23.5222 12.3784L23.512 12.3871C23.0541 12.779 22.5317 13.226 21.927 13.4867C20.4137 14.1387 19.7367 14.4065 18.5336 14.8823C18.2496 14.9947 17.9363 15.1186 17.5758 15.2619C17.3992 15.3323 17.238 15.3844 17.0994 15.3923C17.0252 15.3965 16.9387 15.3894 16.8541 15.3509C16.7647 15.3102 16.7025 15.2459 16.6623 15.1764C16.5952 15.0606 16.5851 14.9177 16.579 14.8283C16.5767 14.7949 16.5749 14.7623 16.573 14.7294C16.5687 14.6509 16.5642 14.5715 16.5532 14.4785C16.5231 14.2216 16.5676 13.9944 16.7272 13.81C16.8729 13.6418 17.0847 13.5467 17.2877 13.4734C17.6773 13.3326 17.9876 13.2231 18.2563 13.1283C19.0863 12.8354 19.5206 12.6822 20.6764 12.1775C20.9854 12.0427 21.1987 11.9452 21.3525 11.854C21.5024 11.7652 21.5723 11.6956 21.613 11.6275C21.6548 11.5577 21.6839 11.4594 21.6946 11.2804C21.7056 11.0983 21.6964 10.8639 21.682 10.5314C21.6282 9.3047 21.5718 8.08759 21.3437 6.91196C21.1501 5.9174 20.5524 5.04818 19.7471 4.31353C17.8306 2.56529 14.937 2.54578 12.8979 4.30176C11.0854 5.86303 10.2674 7.90432 10.0709 10.2046C9.97052 11.3758 9.93534 12.957 9.90582 14.284C9.89968 14.5599 9.89378 14.8248 9.8876 15.0727C9.88447 15.1905 9.90326 15.2318 9.90852 15.2409C9.9182 15.2456 9.95841 15.2605 10.0694 15.2545C10.5579 15.228 11.0772 15.069 11.6419 14.8939L11.6632 14.8873C12.2049 14.7194 12.7902 14.5379 13.3594 14.5065C13.8338 14.4809 14.2758 14.7538 14.4647 15.099C14.5629 15.2785 14.6057 15.5037 14.5117 15.7238C14.4176 15.9442 14.2118 16.0999 13.941 16.1928C13.8275 16.2318 13.7124 16.2721 13.5959 16.313C12.862 16.5705 12.0716 16.8477 11.2686 16.9185C8.25162 17.1824 5.29264 16.8184 2.48687 15.6338C1.8295 15.3566 1.18726 14.9694 0.651027 14.5066C0.407147 14.2959 0.219264 14.0995 0.110542 13.9101C-0.00379479 13.711 -0.0469038 13.4867 0.0661993 13.2684C0.165991 13.0758 0.361245 12.9449 0.562517 12.8448C0.771647 12.7409 1.03988 12.6454 1.34895 12.548L1.34961 12.5478C1.36497 12.543 1.38078 12.5382 1.39674 12.5336ZM3.20941 13.6983C3.20941 13.6982 3.20941 13.6983 3.20941 13.6983Z"
                      fill="currentColor"
                    />
                  </svg>
                  Werfopvolging
                </div>
              )}
              {heeftUitvoeringsplannen && (
                <div aria-label="open project details" className="bg-primair-500 w-fit text-white py-1 px-3 rounded-full flex items-center text-sm font-medium">
                  <svg className="mr-2" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.18182 13.5269C5.75505 13.5269 5.40909 13.1809 5.40909 12.7541C5.40909 11.63 5.61054 10.4468 6.35838 9.54033C7.131 8.60377 8.35348 8.11781 10.0454 8.11778C10.4722 8.11778 10.8182 8.46374 10.8182 8.8905C10.8182 9.31727 10.4722 9.66323 10.0455 9.66324C8.64627 9.66326 7.93693 10.0554 7.55052 10.5238C7.13934 11.0222 6.95454 11.7708 6.95454 12.7541C6.95454 13.1809 6.60858 13.5269 6.18182 13.5269Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.772727 17C0.345962 17 -5.59635e-08 16.654 0 16.2273L1.36792e-06 5.79583C1.39479e-06 5.59089 0.0814135 5.39434 0.226328 5.24943C0.371243 5.10452 0.567789 5.0231 0.772729 5.0231L5.8435 5.0231L10.2508 0.2486C10.397 0.090128 10.6029 -2.82811e-08 10.8186 0L16.2273 2.18313e-06C16.654 2.23909e-06 17 0.345964 17 0.77273L17 16.2273C17 16.654 16.654 17 16.2273 17L0.772727 17ZM1.54545 15.4545L15.4545 15.4545L15.4545 1.54546L11.1569 1.54545L6.74962 6.31996C6.60334 6.47843 6.39748 6.56856 6.18182 6.56856L1.54546 6.56856L1.54545 15.4545Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17 8.89051C17 9.31728 16.654 9.66324 16.2273 9.66324L10.0455 9.66324C9.6187 9.66324 9.27273 9.31728 9.27273 8.89051C9.27273 8.46374 9.61868 8.11778 10.0454 8.11778L16.2273 8.11778C16.654 8.11779 17 8.46375 17 8.89051Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.0455 12.3674C10.0455 12.7942 9.69949 13.1401 9.27273 13.1401C8.84596 13.1401 8.5 12.7942 8.5 12.3674C8.5 11.9406 8.84596 11.5947 9.27273 11.5947C9.69949 11.5947 10.0455 11.9406 10.0455 12.3674Z"
                      fill="currentColor"
                    />
                  </svg>
                  Uitvoeringsplannen
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function TitleDescription({
  title,
  description
}: Readonly<{
  title: string;
  description: string;
}>) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
