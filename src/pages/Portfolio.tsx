import { ProjectPreviewMobile } from '@/components/ProjectPreviewMobile';
import portfolio from '../assets/portfolio.json'
import { Project } from '@/models/portfolio';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useBreakpoint } from '@/lib/breakpoints';
import { ProjectPreviewDesktop } from '@/components/ProjectPreviewDesktop';

type Category = 'voorstudie' | 'werfopvolging' | 'uitvoeringsplannen';

export function Portfolio() {
  const { isLg } = useBreakpoint('lg')

  const [projects, setProjects] = useState(portfolio as Project[]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(()=> {
    const allProjects = portfolio as Project[];
    
    setProjects(
      categories.length > 0 
        ? allProjects.filter(project => 
            (
              categories.includes('voorstudie') && project.heeftVoorstudie || 
              categories.includes('werfopvolging') && project.heeftWerfopvolging || 
              categories.includes('uitvoeringsplannen') && project.heeftUitvoeringsplannen
            )
            && project.projectNaam.toLowerCase().includes(searchValue.toLowerCase())
          )
        : allProjects.filter(project => project.projectNaam.toLowerCase().includes(searchValue.toLowerCase()))
    );
  }, [categories, searchValue])
  

  function checkedChange(checked:boolean, category: Category) {
    setCategories(prevCategories => {
      if (checked) {
        return [...prevCategories, category]
      } else {
        return prevCategories.filter(prevCategory => prevCategory !== category)
      }
    })
  }

  return (
    <>
      <header className="flex flex-col md:flex-row gap-5 md:gap-32 justify-between md:items-center bg-gray-100 py-8 md:py-24 px-4 md:px-12 lg:px-28">
        <div className="w-fit flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-primair-500 md:text-5xl uppercase">
            Portfolio
          </h1>
          <div className="w-full h-1 bg-primair-500"> </div>
        </div>
        <p className="max-w-xl text-md text-gray-500">
          Verken mijn diversiteit aan villa's, huizen en appartementen, elk met
          unieke stabiliteitsstudies.
        </p>
      </header>
      <section className='flex flex-row w-full gap-4 justify-between py-8 md:pt-20 px-4 md:px-12 lg:px-28'>
        <div className="relative w-full xl:w-1/3">
          <Search className="absolute left-3 h-full w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Zoek bij naam"
            className="pl-9"
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>
        { 
          isLg 
            ? <ToggleGroup type="multiple" defaultValue={categories} onValueChange={(categories)=> setCategories(categories as Category[])}>
                <ToggleGroupItem value="voorstudie" aria-label="Toggle voorstudie">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M14.5005 20.0001C18.5005 20 20.5 17 20.5 14V1L1.50049 1V7M1 20.5001L6.54927 18.3657C6.90421 18.2292 7.08168 18.161 7.24772 18.0718C7.3952 17.9927 7.5358 17.9013 7.66804 17.7987C7.81692 17.6831 7.95137 17.5487 8.22028 17.2798L15.5002 10C16.6048 8.89543 16.6048 7.10457 15.5002 6C14.3957 4.89543 12.6048 4.89543 11.5003 6L4.22028 13.2798C3.95138 13.5487 3.81692 13.6831 3.70139 13.832C3.59877 13.9643 3.5074 14.1049 3.42824 14.2523C3.33911 14.4184 3.27085 14.5959 3.13433 14.9508L1 20.5001ZM1 20.5001L3.05812 15.149C3.2054 14.7661 3.27903 14.5746 3.40534 14.4869C3.51572 14.4103 3.6523 14.3813 3.7843 14.4065C3.93533 14.4354 4.08038 14.5804 4.37048 14.8705L6.62957 17.1296C6.91967 17.4197 7.06472 17.5648 7.09356 17.7158C7.11877 17.8478 7.08979 17.9844 7.01315 18.0947C6.92545 18.2211 6.73399 18.2947 6.35107 18.442L1 20.5001Z" stroke="#EB5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="hidden sm:block ml-2 text-sm font-medium uppercase">Voorstudie</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="werfopvolging" aria-label="Toggle werfopvolging">
                  <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                    <path d="M1.95828 14.9985C1.87234 15.0224 1.77413 15.0462 1.6796 15.076C0.249385 15.5309 -0.120893 15.8561 0.986452 16.8208C1.58309 17.3401 2.30127 17.7772 3.03786 18.0904C6.25186 19.4587 9.64511 19.8815 13.1157 19.5755C14.1469 19.4838 15.1597 19.0824 16.1504 18.7394C17.1792 18.3836 16.4347 17.3509 15.6054 17.3961C14.363 17.4651 13.0101 18.2081 11.7666 18.276C11.3503 18.2986 11.1846 18.1438 11.1957 17.7246C11.2374 16.0382 11.2681 13.6552 11.4105 11.9784C11.645 9.21065 12.6258 6.72157 14.8209 4.81486C17.3266 2.639 20.9028 2.65568 23.2721 4.83511C24.2456 5.7307 24.9921 6.81208 25.2351 8.07091C25.5064 9.48099 25.5727 10.9363 25.6353 12.3761C25.7016 13.9185 25.6918 13.9983 24.2629 14.6271C22.4643 15.419 22.1383 15.4861 20.2883 16.1601C19.8303 16.3269 19.5934 16.5103 19.6498 16.9961C19.7274 17.6574 19.561 17.9776 20.3754 17.65C22.5802 16.7663 23.266 16.5111 25.4426 15.5655C26.097 15.2809 26.6714 14.7866 27.2166 14.3162C27.688 13.9089 27.8181 13.1943 27.4388 12.8073C26.9072 12.2666 26.9759 11.6557 26.9894 11.0375C27.0311 9.07606 26.6727 7.21581 25.6476 5.49608C23.2672 1.50284 18.3037 0.428611 14.4452 3.12015C11.5136 5.165 10.2012 8.09115 9.93607 11.4794C9.80225 13.1955 9.79513 15.9084 9.79513 17.6342C9.79513 18.1431 9.39756 18.276 8.9075 18.1593C8.45783 18.0521 7.99305 17.9384 7.58452 17.8423C7.24216 17.7619 7.06859 17.4592 7.06957 17.082C7.07988 13.1108 7.21133 9.0796 8.41205 6.66662C9.93606 3.60393 11.2219 2.08519 14.3938 0.851855C15.5954 0.384558 14.2361 -0.040565 12.3999 0.851874C8.41204 2.78996 7.21774 5.52679 6.41815 8.60481C5.8085 10.9517 5.74651 14.1132 5.74025 16.6578C5.7392 17.082 5.38724 17.267 5.15646 17.1673C4.62176 16.9366 4.25673 16.7973 3.68682 16.5146C3.55178 16.4479 3.40115 16.2335 3.40446 16.1073C3.45111 14.3245 3.38161 11.452 3.64187 9.69655C4.00157 7.26821 4.26863 5.83091 5.59788 3.89266C6.26252 2.92354 7.06812 2.17524 7.80247 1.49419C8.66185 0.697181 7.8127 0.590439 6.41815 1.49419C3.64187 3.2934 2.60553 6.66656 2.19324 9.53339C1.98822 10.9589 2.02703 13.4884 1.95951 15.0021L1.95828 14.9985Z" fill="#EB5A3D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.95951 15.0021C1.95957 15.0008 1.95963 14.9994 1.95969 14.9981C1.9646 14.8876 1.96894 14.7717 1.97286 14.6512C1.98615 14.2428 1.99451 13.7818 2.00325 13.3003C2.02724 11.9781 2.05404 10.5013 2.19324 9.53339C2.60553 6.66656 3.64187 3.2934 6.41815 1.49419C7.8127 0.590439 8.66185 0.697181 7.80247 1.49419C7.06812 2.17524 6.26252 2.92354 5.59788 3.89266C4.26863 5.83091 4.00157 7.26821 3.64187 9.69655C3.45156 10.9802 3.43757 12.8612 3.42556 14.4766C3.42115 15.0703 3.417 15.6282 3.40446 16.1073C3.40115 16.2335 3.55178 16.4479 3.68682 16.5146C4.10927 16.7242 4.41916 16.8549 4.76902 17.0025C4.89113 17.0541 5.01812 17.1076 5.15646 17.1673C5.38724 17.267 5.7392 17.082 5.74025 16.6578C5.74651 14.1132 5.8085 10.9517 6.41815 8.60481C7.21774 5.52679 8.41204 2.78996 12.3999 0.851874C14.2361 -0.040565 15.5954 0.384558 14.3938 0.851855C11.2219 2.08519 9.93606 3.60393 8.41205 6.66662C7.21133 9.0796 7.07988 13.1108 7.06957 17.082C7.06859 17.4592 7.24216 17.7619 7.58452 17.8423C7.82352 17.8985 8.08177 17.9608 8.34498 18.0242C8.53169 18.0692 8.7209 18.1148 8.9075 18.1593C9.39756 18.276 9.79513 18.1431 9.79513 17.6342C9.79513 15.9084 9.80225 13.1955 9.93607 11.4794C10.2012 8.09115 11.5136 5.165 14.4452 3.12015C18.3037 0.428611 23.2672 1.50284 25.6476 5.49608C26.6727 7.21581 27.0311 9.07606 26.9894 11.0375C26.9883 11.0899 26.9868 11.1422 26.9852 11.1944C26.9686 11.7587 26.9522 12.3124 27.4388 12.8073C27.8181 13.1943 27.688 13.9089 27.2166 14.3162C26.6714 14.7866 26.097 15.2809 25.4426 15.5655C23.682 16.3304 22.8969 16.6435 21.4942 17.2029C21.1628 17.3351 20.7968 17.4811 20.3754 17.65C19.7085 17.9182 19.6993 17.7521 19.6752 17.3201C19.6699 17.2245 19.6639 17.1159 19.6498 16.9961C19.5934 16.5103 19.8303 16.3269 20.2883 16.1601C20.7389 15.9959 21.0992 15.8678 21.4123 15.7564C22.3845 15.4104 22.9024 15.2261 24.2629 14.6271C25.6918 13.9983 25.7016 13.9185 25.6353 12.3761C25.5727 10.9363 25.5064 9.48099 25.2351 8.07091C24.9921 6.81208 24.2456 5.7307 23.2721 4.83511C20.9028 2.65568 17.3266 2.639 14.8209 4.81486C12.6258 6.72157 11.645 9.21065 11.4105 11.9784C11.2925 13.3674 11.2512 15.2409 11.2168 16.8018C11.2097 17.1252 11.2028 17.4352 11.1957 17.7246C11.1846 18.1438 11.3503 18.2986 11.7666 18.276C12.3891 18.242 13.039 18.0389 13.6887 17.8358C14.3369 17.6331 14.9849 17.4305 15.6054 17.3961C16.4347 17.3509 17.1792 18.3836 16.1504 18.7394C16.014 18.7866 15.8771 18.835 15.7398 18.8835C14.8804 19.1871 14.0048 19.4964 13.1157 19.5755C9.64511 19.8815 6.25186 19.4587 3.03786 18.0904C2.30127 17.7772 1.58309 17.3401 0.986452 16.8208C-0.120893 15.8561 0.249385 15.5309 1.6796 15.076C1.74408 15.0557 1.81027 15.0381 1.8731 15.0214C1.89847 15.0147 1.92329 15.0081 1.94723 15.0016C1.95093 15.0006 1.95462 14.9995 1.95828 14.9985L1.95951 15.0021ZM1.62953 14.7454C1.64482 14.3155 1.65377 13.822 1.66321 13.3012C1.66955 12.9518 1.6761 12.59 1.68495 12.2269C1.70928 11.2285 1.75097 10.2219 1.85655 9.48774C2.27121 6.60445 3.3239 3.10262 6.22943 1.21965C6.59292 0.984079 6.92738 0.810032 7.21444 0.695523C7.49124 0.585103 7.7572 0.516445 7.97225 0.526722C8.07799 0.531776 8.22492 0.558406 8.34182 0.66437C8.47757 0.787429 8.50415 0.952056 8.4797 1.08775C8.45762 1.21027 8.39431 1.32285 8.32463 1.41868C8.25187 1.51875 8.15497 1.62374 8.03728 1.73289C7.30055 2.41614 6.52172 3.14113 5.88085 4.07561C4.59581 5.94939 4.33668 7.32454 3.97837 9.74354C3.79163 11.0031 3.77791 12.8438 3.76594 14.4525C3.76153 15.0449 3.75735 15.6058 3.74485 16.0947C3.7501 16.1074 3.76011 16.1265 3.77536 16.1484C3.79073 16.1704 3.80772 16.1901 3.82316 16.2048C3.83545 16.2165 3.84251 16.221 3.84304 16.2214C4.25454 16.4255 4.55187 16.551 4.89828 16.6971C5.0202 16.7486 5.14819 16.8026 5.28938 16.8635C5.29343 16.8635 5.30713 16.8623 5.32805 16.8468C5.35382 16.8277 5.4 16.7758 5.4003 16.657C5.40654 14.119 5.46697 10.9168 6.08852 8.52408C6.49164 6.97226 7.0015 5.47586 7.93024 4.11824C8.86253 2.75544 10.2049 1.54951 12.2477 0.556706C13.2038 0.092 14.0723 -0.0497039 14.58 0.0146593C14.7064 0.0306837 14.8421 0.063163 14.9542 0.130613C15.0722 0.201595 15.2155 0.35097 15.1842 0.573767C15.1591 0.753269 15.0287 0.874302 14.9337 0.944213C14.8261 1.02331 14.6854 1.09401 14.5202 1.15828C12.9664 1.76243 11.8967 2.42747 11.0299 3.3021C10.1589 4.18108 9.475 5.28923 8.71815 6.81022C8.14407 7.9639 7.81573 9.52862 7.63271 11.3225C7.4502 13.1113 7.41468 15.0983 7.40952 17.0829C7.40878 17.3694 7.5294 17.4898 7.66445 17.5215C7.90385 17.5778 8.16445 17.6406 8.42889 17.7043C8.61547 17.7493 8.80403 17.7947 8.98851 17.8387C9.19641 17.8882 9.3213 17.8676 9.37651 17.8394C9.39865 17.828 9.41324 17.8142 9.42506 17.7926C9.43835 17.7683 9.45518 17.7204 9.45518 17.6342C9.45518 15.9123 9.46209 13.1857 9.59708 11.4545C9.86797 7.99318 11.2154 4.96657 14.2469 2.85207C18.2712 0.0448616 23.4624 1.17136 25.9419 5.33073C27.0053 7.11483 27.372 9.03825 27.3293 11.0443C27.3283 11.0934 27.327 11.1415 27.3258 11.1883C27.3106 11.7715 27.2997 12.1878 27.6847 12.5794C27.9644 12.8647 28.0385 13.2523 27.9827 13.6043C27.9268 13.957 27.7382 14.3073 27.4426 14.5628L27.4307 14.5731C26.8964 15.0341 26.287 15.5599 25.5815 15.8667C23.816 16.6338 23.0262 16.9488 21.6225 17.5086C21.2912 17.6408 20.9257 17.7865 20.5051 17.9551C20.299 18.038 20.111 18.0993 19.9493 18.1085C19.8628 18.1135 19.7618 18.1051 19.6632 18.0599C19.5588 18.012 19.4863 17.9364 19.4393 17.8546C19.3611 17.7183 19.3493 17.5502 19.3422 17.4451C19.3395 17.4058 19.3374 17.3674 19.3352 17.3287C19.3301 17.2364 19.3249 17.1429 19.3121 17.0335C19.277 16.7313 19.3288 16.464 19.5151 16.2471C19.685 16.0492 19.9322 15.9373 20.1689 15.8511C20.6236 15.6854 20.9855 15.5566 21.2991 15.4451C22.2673 15.1005 22.774 14.9202 24.1225 14.3265C24.4829 14.1678 24.7318 14.0531 24.9113 13.9459C25.0861 13.8414 25.1677 13.7596 25.2152 13.6794C25.2639 13.5973 25.2979 13.4817 25.3104 13.2711C25.3232 13.0568 25.3125 12.7811 25.2957 12.3899C25.2329 10.9467 25.1671 9.51482 24.9009 8.13172C24.6751 6.96164 23.9778 5.93904 23.0382 5.07474C20.8023 3.01799 17.4265 2.99503 15.0476 5.0609C12.933 6.89768 11.9786 9.2992 11.7493 12.0054C11.6323 13.3833 11.5912 15.2435 11.5568 16.8047C11.5496 17.1293 11.5427 17.4409 11.5355 17.7326C11.5319 17.8712 11.5538 17.9198 11.5599 17.9305C11.5712 17.936 11.6181 17.9535 11.7476 17.9465C12.3176 17.9153 12.9234 17.7282 13.5822 17.5223L13.6071 17.5145C14.239 17.3169 14.9219 17.1034 15.586 17.0665C16.1394 17.0364 16.6551 17.3574 16.8755 17.7635C16.9901 17.9747 17.04 18.2396 16.9303 18.4986C16.8205 18.7578 16.5804 18.9411 16.2645 19.0503C16.1321 19.0962 15.9978 19.1437 15.8618 19.1918C15.0056 19.4947 14.0835 19.8209 13.1467 19.9042C9.62689 20.2146 6.17475 19.7863 2.90134 18.3927C2.13442 18.0665 1.38514 17.6111 0.759532 17.0665C0.475004 16.8187 0.255808 16.5876 0.128966 16.3649C-0.00442726 16.1306 -0.054721 15.8667 0.0772326 15.6099C0.193656 15.3833 0.421452 15.2292 0.65627 15.1116C0.900255 14.9893 1.21319 14.877 1.57377 14.7623L1.57455 14.7621C1.59246 14.7564 1.61091 14.7508 1.62953 14.7454ZM3.74431 16.1156C3.74431 16.1156 3.74431 16.1156 3.74431 16.1156Z" fill="#EB5A3D"/>
                  </svg>
                  <span className="hidden sm:block ml-2 text-sm font-medium uppercase">Werfopvolging</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="uitvoeringsplannen" aria-label="Toggle uitvoeringsplannen">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 17.5005C7.44772 17.5005 7 17.0528 7 16.5005C7 15.0458 7.2607 13.5146 8.22849 12.3414C9.22835 11.1294 10.8104 10.5005 13 10.5005C13.5523 10.5005 14 10.9482 14 11.5005C14 12.0528 13.5523 12.5005 13 12.5005C11.1893 12.5005 10.2713 13.008 9.77127 13.6142C9.23914 14.2592 9 15.228 9 16.5005C9 17.0528 8.55228 17.5005 8 17.5005Z" fill="#EB5A3D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 21.9951C0.447715 21.9951 -7.24234e-08 21.5474 0 20.9951L1.77025e-06 7.4956C1.80503e-06 7.23039 0.105359 6.97603 0.292895 6.7885C0.480432 6.60096 0.734786 6.4956 1 6.4956L7.56217 6.49561L13.2657 0.316835C13.455 0.111753 13.7214 -0.00488285 14.0005 -0.00488281L21 -0.00487999C21.5523 -0.00487991 22 0.442836 22 0.99512L22 20.9951C22 21.5474 21.5523 21.9951 21 21.9951L1 21.9951ZM2 19.9951L20 19.9951L20 1.99512L14.4383 1.99512L8.7348 8.17389C8.5455 8.37897 8.2791 8.49561 8 8.49561L2 8.4956L2 19.9951Z" fill="#EB5A3D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M22 11.5005C22 12.0528 21.5523 12.5005 21 12.5005L13 12.5005C12.4477 12.5005 12 12.0528 12 11.5005C12 10.9482 12.4477 10.5005 13 10.5005L21 10.5005C21.5523 10.5005 22 10.9482 22 11.5005Z" fill="#EB5A3D"/>
                    <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#EB5A3D"/>
                  </svg>
                  <span className="hidden sm:block ml-2 text-sm font-medium uppercase">Uitvoeringsplannen</span>
                </ToggleGroupItem>
              </ToggleGroup>
            : <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className='uppercase' variant="outline">Filter op categorieën</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuCheckboxItem checked={categories.includes('voorstudie')} onCheckedChange={(checked) => checkedChange(checked, 'voorstudie')}>
                    {/* <svg className='w-[22px] h-[22px]' viewBox="0 0 22 22" fill="none">
                      <path d="M14.5005 20.0001C18.5005 20 20.5 17 20.5 14V1L1.50049 1V7M1 20.5001L6.54927 18.3657C6.90421 18.2292 7.08168 18.161 7.24772 18.0718C7.3952 17.9927 7.5358 17.9013 7.66804 17.7987C7.81692 17.6831 7.95137 17.5487 8.22028 17.2798L15.5002 10C16.6048 8.89543 16.6048 7.10457 15.5002 6C14.3957 4.89543 12.6048 4.89543 11.5003 6L4.22028 13.2798C3.95138 13.5487 3.81692 13.6831 3.70139 13.832C3.59877 13.9643 3.5074 14.1049 3.42824 14.2523C3.33911 14.4184 3.27085 14.5959 3.13433 14.9508L1 20.5001ZM1 20.5001L3.05812 15.149C3.2054 14.7661 3.27903 14.5746 3.40534 14.4869C3.51572 14.4103 3.6523 14.3813 3.7843 14.4065C3.93533 14.4354 4.08038 14.5804 4.37048 14.8705L6.62957 17.1296C6.91967 17.4197 7.06472 17.5648 7.09356 17.7158C7.11877 17.8478 7.08979 17.9844 7.01315 18.0947C6.92545 18.2211 6.73399 18.2947 6.35107 18.442L1 20.5001Z" stroke="#EB5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> */}
                    <span className="hidden sm:block ml-2 text-sm font-medium uppercase">Voorstudie</span>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem checked={categories.includes('werfopvolging')} onCheckedChange={(checked) => checkedChange(checked, 'werfopvolging')}>
                    {/* <svg className='w-[28px] h-[20px]' viewBox="0 0 28 20" fill="none">
                      <path d="M1.95828 14.9985C1.87234 15.0224 1.77413 15.0462 1.6796 15.076C0.249385 15.5309 -0.120893 15.8561 0.986452 16.8208C1.58309 17.3401 2.30127 17.7772 3.03786 18.0904C6.25186 19.4587 9.64511 19.8815 13.1157 19.5755C14.1469 19.4838 15.1597 19.0824 16.1504 18.7394C17.1792 18.3836 16.4347 17.3509 15.6054 17.3961C14.363 17.4651 13.0101 18.2081 11.7666 18.276C11.3503 18.2986 11.1846 18.1438 11.1957 17.7246C11.2374 16.0382 11.2681 13.6552 11.4105 11.9784C11.645 9.21065 12.6258 6.72157 14.8209 4.81486C17.3266 2.639 20.9028 2.65568 23.2721 4.83511C24.2456 5.7307 24.9921 6.81208 25.2351 8.07091C25.5064 9.48099 25.5727 10.9363 25.6353 12.3761C25.7016 13.9185 25.6918 13.9983 24.2629 14.6271C22.4643 15.419 22.1383 15.4861 20.2883 16.1601C19.8303 16.3269 19.5934 16.5103 19.6498 16.9961C19.7274 17.6574 19.561 17.9776 20.3754 17.65C22.5802 16.7663 23.266 16.5111 25.4426 15.5655C26.097 15.2809 26.6714 14.7866 27.2166 14.3162C27.688 13.9089 27.8181 13.1943 27.4388 12.8073C26.9072 12.2666 26.9759 11.6557 26.9894 11.0375C27.0311 9.07606 26.6727 7.21581 25.6476 5.49608C23.2672 1.50284 18.3037 0.428611 14.4452 3.12015C11.5136 5.165 10.2012 8.09115 9.93607 11.4794C9.80225 13.1955 9.79513 15.9084 9.79513 17.6342C9.79513 18.1431 9.39756 18.276 8.9075 18.1593C8.45783 18.0521 7.99305 17.9384 7.58452 17.8423C7.24216 17.7619 7.06859 17.4592 7.06957 17.082C7.07988 13.1108 7.21133 9.0796 8.41205 6.66662C9.93606 3.60393 11.2219 2.08519 14.3938 0.851855C15.5954 0.384558 14.2361 -0.040565 12.3999 0.851874C8.41204 2.78996 7.21774 5.52679 6.41815 8.60481C5.8085 10.9517 5.74651 14.1132 5.74025 16.6578C5.7392 17.082 5.38724 17.267 5.15646 17.1673C4.62176 16.9366 4.25673 16.7973 3.68682 16.5146C3.55178 16.4479 3.40115 16.2335 3.40446 16.1073C3.45111 14.3245 3.38161 11.452 3.64187 9.69655C4.00157 7.26821 4.26863 5.83091 5.59788 3.89266C6.26252 2.92354 7.06812 2.17524 7.80247 1.49419C8.66185 0.697181 7.8127 0.590439 6.41815 1.49419C3.64187 3.2934 2.60553 6.66656 2.19324 9.53339C1.98822 10.9589 2.02703 13.4884 1.95951 15.0021L1.95828 14.9985Z" fill="#EB5A3D"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.95951 15.0021C1.95957 15.0008 1.95963 14.9994 1.95969 14.9981C1.9646 14.8876 1.96894 14.7717 1.97286 14.6512C1.98615 14.2428 1.99451 13.7818 2.00325 13.3003C2.02724 11.9781 2.05404 10.5013 2.19324 9.53339C2.60553 6.66656 3.64187 3.2934 6.41815 1.49419C7.8127 0.590439 8.66185 0.697181 7.80247 1.49419C7.06812 2.17524 6.26252 2.92354 5.59788 3.89266C4.26863 5.83091 4.00157 7.26821 3.64187 9.69655C3.45156 10.9802 3.43757 12.8612 3.42556 14.4766C3.42115 15.0703 3.417 15.6282 3.40446 16.1073C3.40115 16.2335 3.55178 16.4479 3.68682 16.5146C4.10927 16.7242 4.41916 16.8549 4.76902 17.0025C4.89113 17.0541 5.01812 17.1076 5.15646 17.1673C5.38724 17.267 5.7392 17.082 5.74025 16.6578C5.74651 14.1132 5.8085 10.9517 6.41815 8.60481C7.21774 5.52679 8.41204 2.78996 12.3999 0.851874C14.2361 -0.040565 15.5954 0.384558 14.3938 0.851855C11.2219 2.08519 9.93606 3.60393 8.41205 6.66662C7.21133 9.0796 7.07988 13.1108 7.06957 17.082C7.06859 17.4592 7.24216 17.7619 7.58452 17.8423C7.82352 17.8985 8.08177 17.9608 8.34498 18.0242C8.53169 18.0692 8.7209 18.1148 8.9075 18.1593C9.39756 18.276 9.79513 18.1431 9.79513 17.6342C9.79513 15.9084 9.80225 13.1955 9.93607 11.4794C10.2012 8.09115 11.5136 5.165 14.4452 3.12015C18.3037 0.428611 23.2672 1.50284 25.6476 5.49608C26.6727 7.21581 27.0311 9.07606 26.9894 11.0375C26.9883 11.0899 26.9868 11.1422 26.9852 11.1944C26.9686 11.7587 26.9522 12.3124 27.4388 12.8073C27.8181 13.1943 27.688 13.9089 27.2166 14.3162C26.6714 14.7866 26.097 15.2809 25.4426 15.5655C23.682 16.3304 22.8969 16.6435 21.4942 17.2029C21.1628 17.3351 20.7968 17.4811 20.3754 17.65C19.7085 17.9182 19.6993 17.7521 19.6752 17.3201C19.6699 17.2245 19.6639 17.1159 19.6498 16.9961C19.5934 16.5103 19.8303 16.3269 20.2883 16.1601C20.7389 15.9959 21.0992 15.8678 21.4123 15.7564C22.3845 15.4104 22.9024 15.2261 24.2629 14.6271C25.6918 13.9983 25.7016 13.9185 25.6353 12.3761C25.5727 10.9363 25.5064 9.48099 25.2351 8.07091C24.9921 6.81208 24.2456 5.7307 23.2721 4.83511C20.9028 2.65568 17.3266 2.639 14.8209 4.81486C12.6258 6.72157 11.645 9.21065 11.4105 11.9784C11.2925 13.3674 11.2512 15.2409 11.2168 16.8018C11.2097 17.1252 11.2028 17.4352 11.1957 17.7246C11.1846 18.1438 11.3503 18.2986 11.7666 18.276C12.3891 18.242 13.039 18.0389 13.6887 17.8358C14.3369 17.6331 14.9849 17.4305 15.6054 17.3961C16.4347 17.3509 17.1792 18.3836 16.1504 18.7394C16.014 18.7866 15.8771 18.835 15.7398 18.8835C14.8804 19.1871 14.0048 19.4964 13.1157 19.5755C9.64511 19.8815 6.25186 19.4587 3.03786 18.0904C2.30127 17.7772 1.58309 17.3401 0.986452 16.8208C-0.120893 15.8561 0.249385 15.5309 1.6796 15.076C1.74408 15.0557 1.81027 15.0381 1.8731 15.0214C1.89847 15.0147 1.92329 15.0081 1.94723 15.0016C1.95093 15.0006 1.95462 14.9995 1.95828 14.9985L1.95951 15.0021ZM1.62953 14.7454C1.64482 14.3155 1.65377 13.822 1.66321 13.3012C1.66955 12.9518 1.6761 12.59 1.68495 12.2269C1.70928 11.2285 1.75097 10.2219 1.85655 9.48774C2.27121 6.60445 3.3239 3.10262 6.22943 1.21965C6.59292 0.984079 6.92738 0.810032 7.21444 0.695523C7.49124 0.585103 7.7572 0.516445 7.97225 0.526722C8.07799 0.531776 8.22492 0.558406 8.34182 0.66437C8.47757 0.787429 8.50415 0.952056 8.4797 1.08775C8.45762 1.21027 8.39431 1.32285 8.32463 1.41868C8.25187 1.51875 8.15497 1.62374 8.03728 1.73289C7.30055 2.41614 6.52172 3.14113 5.88085 4.07561C4.59581 5.94939 4.33668 7.32454 3.97837 9.74354C3.79163 11.0031 3.77791 12.8438 3.76594 14.4525C3.76153 15.0449 3.75735 15.6058 3.74485 16.0947C3.7501 16.1074 3.76011 16.1265 3.77536 16.1484C3.79073 16.1704 3.80772 16.1901 3.82316 16.2048C3.83545 16.2165 3.84251 16.221 3.84304 16.2214C4.25454 16.4255 4.55187 16.551 4.89828 16.6971C5.0202 16.7486 5.14819 16.8026 5.28938 16.8635C5.29343 16.8635 5.30713 16.8623 5.32805 16.8468C5.35382 16.8277 5.4 16.7758 5.4003 16.657C5.40654 14.119 5.46697 10.9168 6.08852 8.52408C6.49164 6.97226 7.0015 5.47586 7.93024 4.11824C8.86253 2.75544 10.2049 1.54951 12.2477 0.556706C13.2038 0.092 14.0723 -0.0497039 14.58 0.0146593C14.7064 0.0306837 14.8421 0.063163 14.9542 0.130613C15.0722 0.201595 15.2155 0.35097 15.1842 0.573767C15.1591 0.753269 15.0287 0.874302 14.9337 0.944213C14.8261 1.02331 14.6854 1.09401 14.5202 1.15828C12.9664 1.76243 11.8967 2.42747 11.0299 3.3021C10.1589 4.18108 9.475 5.28923 8.71815 6.81022C8.14407 7.9639 7.81573 9.52862 7.63271 11.3225C7.4502 13.1113 7.41468 15.0983 7.40952 17.0829C7.40878 17.3694 7.5294 17.4898 7.66445 17.5215C7.90385 17.5778 8.16445 17.6406 8.42889 17.7043C8.61547 17.7493 8.80403 17.7947 8.98851 17.8387C9.19641 17.8882 9.3213 17.8676 9.37651 17.8394C9.39865 17.828 9.41324 17.8142 9.42506 17.7926C9.43835 17.7683 9.45518 17.7204 9.45518 17.6342C9.45518 15.9123 9.46209 13.1857 9.59708 11.4545C9.86797 7.99318 11.2154 4.96657 14.2469 2.85207C18.2712 0.0448616 23.4624 1.17136 25.9419 5.33073C27.0053 7.11483 27.372 9.03825 27.3293 11.0443C27.3283 11.0934 27.327 11.1415 27.3258 11.1883C27.3106 11.7715 27.2997 12.1878 27.6847 12.5794C27.9644 12.8647 28.0385 13.2523 27.9827 13.6043C27.9268 13.957 27.7382 14.3073 27.4426 14.5628L27.4307 14.5731C26.8964 15.0341 26.287 15.5599 25.5815 15.8667C23.816 16.6338 23.0262 16.9488 21.6225 17.5086C21.2912 17.6408 20.9257 17.7865 20.5051 17.9551C20.299 18.038 20.111 18.0993 19.9493 18.1085C19.8628 18.1135 19.7618 18.1051 19.6632 18.0599C19.5588 18.012 19.4863 17.9364 19.4393 17.8546C19.3611 17.7183 19.3493 17.5502 19.3422 17.4451C19.3395 17.4058 19.3374 17.3674 19.3352 17.3287C19.3301 17.2364 19.3249 17.1429 19.3121 17.0335C19.277 16.7313 19.3288 16.464 19.5151 16.2471C19.685 16.0492 19.9322 15.9373 20.1689 15.8511C20.6236 15.6854 20.9855 15.5566 21.2991 15.4451C22.2673 15.1005 22.774 14.9202 24.1225 14.3265C24.4829 14.1678 24.7318 14.0531 24.9113 13.9459C25.0861 13.8414 25.1677 13.7596 25.2152 13.6794C25.2639 13.5973 25.2979 13.4817 25.3104 13.2711C25.3232 13.0568 25.3125 12.7811 25.2957 12.3899C25.2329 10.9467 25.1671 9.51482 24.9009 8.13172C24.6751 6.96164 23.9778 5.93904 23.0382 5.07474C20.8023 3.01799 17.4265 2.99503 15.0476 5.0609C12.933 6.89768 11.9786 9.2992 11.7493 12.0054C11.6323 13.3833 11.5912 15.2435 11.5568 16.8047C11.5496 17.1293 11.5427 17.4409 11.5355 17.7326C11.5319 17.8712 11.5538 17.9198 11.5599 17.9305C11.5712 17.936 11.6181 17.9535 11.7476 17.9465C12.3176 17.9153 12.9234 17.7282 13.5822 17.5223L13.6071 17.5145C14.239 17.3169 14.9219 17.1034 15.586 17.0665C16.1394 17.0364 16.6551 17.3574 16.8755 17.7635C16.9901 17.9747 17.04 18.2396 16.9303 18.4986C16.8205 18.7578 16.5804 18.9411 16.2645 19.0503C16.1321 19.0962 15.9978 19.1437 15.8618 19.1918C15.0056 19.4947 14.0835 19.8209 13.1467 19.9042C9.62689 20.2146 6.17475 19.7863 2.90134 18.3927C2.13442 18.0665 1.38514 17.6111 0.759532 17.0665C0.475004 16.8187 0.255808 16.5876 0.128966 16.3649C-0.00442726 16.1306 -0.054721 15.8667 0.0772326 15.6099C0.193656 15.3833 0.421452 15.2292 0.65627 15.1116C0.900255 14.9893 1.21319 14.877 1.57377 14.7623L1.57455 14.7621C1.59246 14.7564 1.61091 14.7508 1.62953 14.7454ZM3.74431 16.1156C3.74431 16.1156 3.74431 16.1156 3.74431 16.1156Z" fill="#EB5A3D"/>
                    </svg> */}
                    <span className="hidden sm:block ml-2 text-sm font-medium uppercase">Werfopvolging</span>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem checked={categories.includes('uitvoeringsplannen')} onCheckedChange={(checked) => checkedChange(checked, 'uitvoeringsplannen')}>
                    {/* <svg className='w-[22px] min-w-[22px] h-[22px]' viewBox="0 0 22 22" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 17.5005C7.44772 17.5005 7 17.0528 7 16.5005C7 15.0458 7.2607 13.5146 8.22849 12.3414C9.22835 11.1294 10.8104 10.5005 13 10.5005C13.5523 10.5005 14 10.9482 14 11.5005C14 12.0528 13.5523 12.5005 13 12.5005C11.1893 12.5005 10.2713 13.008 9.77127 13.6142C9.23914 14.2592 9 15.228 9 16.5005C9 17.0528 8.55228 17.5005 8 17.5005Z" fill="#EB5A3D"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M1 21.9951C0.447715 21.9951 -7.24234e-08 21.5474 0 20.9951L1.77025e-06 7.4956C1.80503e-06 7.23039 0.105359 6.97603 0.292895 6.7885C0.480432 6.60096 0.734786 6.4956 1 6.4956L7.56217 6.49561L13.2657 0.316835C13.455 0.111753 13.7214 -0.00488285 14.0005 -0.00488281L21 -0.00487999C21.5523 -0.00487991 22 0.442836 22 0.99512L22 20.9951C22 21.5474 21.5523 21.9951 21 21.9951L1 21.9951ZM2 19.9951L20 19.9951L20 1.99512L14.4383 1.99512L8.7348 8.17389C8.5455 8.37897 8.2791 8.49561 8 8.49561L2 8.4956L2 19.9951Z" fill="#EB5A3D"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M22 11.5005C22 12.0528 21.5523 12.5005 21 12.5005L13 12.5005C12.4477 12.5005 12 12.0528 12 11.5005C12 10.9482 12.4477 10.5005 13 10.5005L21 10.5005C21.5523 10.5005 22 10.9482 22 11.5005Z" fill="#EB5A3D"/>
                      <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#EB5A3D"/>
                    </svg> */}
                    <span className="hidden sm:block ml-2 text-sm font-medium uppercase">Uitvoeringsplannen</span>
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu> 
        }
      </section>
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 pb-12 md:pb-24 px-4 md:px-12 lg:px-28">
        {projects.map((project) => (
          <div key={project.id} className="w-full h-96">
            {
              isLg 
                ? <ProjectPreviewDesktop
                    image={`assets/portfolio/${project.id}/RENDER.webp`}
                    {...project}
                  ></ProjectPreviewDesktop>
                : <ProjectPreviewMobile 
                    image={`assets/portfolio/${project.id}/RENDER.webp`}
                    {...project}
                  ></ProjectPreviewMobile>
            }
          </div>
        ))}
      </section>
    </>
  );
}