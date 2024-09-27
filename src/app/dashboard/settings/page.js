import Breadcrumb1 from "@/components/common/Breadcrumb1";
import Footer from "@/components/footer/Footer";
import InnerPageHeader1 from "@/components/header/InnerPageHeader1";
import Link from "next/link";
import React from "react";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const SettingsPage = () => {
  return (
    <div>
      <InnerPageHeader1 />
      <Breadcrumb1 pagetitle={"Profile"} currentPage={"Profile"} />
      <div className="dashboard-section pt-110 mb-110">
        <div className="container">
          <div className="dashboard-wrapper">
            <div className="dashboard-sidebar-menu">
              <ul>
                <li>
                  <Link href="/dashboard">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.93745 6.00005H1.31245C0.588727 6.00005 0 5.41132 0 4.68745V1.31245C0 0.588727 0.588727 0 1.31245 0H6.93745C7.66132 0 8.25005 0.588727 8.25005 1.31245V4.68745C8.25005 5.41132 7.66132 6.00005 6.93745 6.00005ZM1.31245 1.125C1.26275 1.12504 1.21509 1.1448 1.17994 1.17994C1.1448 1.21509 1.12504 1.26275 1.125 1.31245V4.68745C1.12501 4.73718 1.14476 4.78487 1.17991 4.82004C1.21505 4.85522 1.26273 4.875 1.31245 4.87505H6.93745C6.9872 4.87503 7.0349 4.85526 7.07008 4.82008C7.10526 4.7849 7.12503 4.7372 7.12505 4.68745V1.31245C7.125 1.26273 7.10522 1.21505 7.07004 1.17991C7.03487 1.14476 6.98718 1.12501 6.93745 1.125H1.31245ZM6.93745 18H1.31245C0.588727 18 0 17.4113 0 16.6875V8.81255C0 8.08868 0.588727 7.49995 1.31245 7.49995H6.93745C7.66132 7.49995 8.25005 8.08868 8.25005 8.81255V16.6875C8.25005 17.4113 7.66132 18 6.93745 18ZM1.31245 8.62495C1.26273 8.625 1.21505 8.64478 1.17991 8.67996C1.14476 8.71513 1.12501 8.76282 1.125 8.81255V16.6875C1.12504 16.7373 1.1448 16.7849 1.17994 16.8201C1.21509 16.8552 1.26275 16.875 1.31245 16.875H6.93745C6.98718 16.875 7.03487 16.8552 7.07004 16.8201C7.10522 16.7849 7.125 16.7373 7.12505 16.6875V8.81255C7.12503 8.7628 7.10526 8.7151 7.07008 8.67992C7.0349 8.64474 6.9872 8.62497 6.93745 8.62495H1.31245ZM16.6875 18H11.0625C10.3387 18 9.74995 17.4113 9.74995 16.6875V13.3125C9.74995 12.5887 10.3387 12 11.0625 12H16.6875C17.4113 12 18 12.5887 18 13.3125V16.6875C18 17.4113 17.4113 18 16.6875 18ZM11.0625 13.125C11.0128 13.125 10.9651 13.1447 10.9299 13.1799C10.8947 13.2151 10.875 13.2628 10.875 13.3125V16.6875C10.875 16.7373 10.8948 16.7849 10.93 16.8201C10.9651 16.8552 11.0128 16.875 11.0625 16.875H16.6875C16.7373 16.875 16.7849 16.8552 16.8201 16.8201C16.8552 16.7849 16.875 16.7373 16.875 16.6875V13.3125C16.875 13.2628 16.8552 13.2151 16.8201 13.18C16.7849 13.1448 16.7373 13.125 16.6875 13.125H11.0625ZM16.6875 10.5H11.0625C10.3387 10.5 9.74995 9.91132 9.74995 9.18745V1.31245C9.74995 0.588727 10.3387 0 11.0625 0H16.6875C17.4113 0 18 0.588727 18 1.31245V9.18745C18 9.91132 17.4113 10.5 16.6875 10.5ZM11.0625 1.125C11.0128 1.12501 10.9651 1.14476 10.93 1.17991C10.8948 1.21505 10.875 1.26273 10.875 1.31245V9.18745C10.875 9.2372 10.8947 9.2849 10.9299 9.32008C10.9651 9.35526 11.0128 9.37503 11.0625 9.37505H16.6875C16.7373 9.375 16.7849 9.35522 16.8201 9.32004C16.8552 9.28487 16.875 9.23718 16.875 9.18745V1.31245C16.875 1.26275 16.8552 1.21509 16.8201 1.17994C16.7849 1.1448 16.7373 1.12504 16.6875 1.125H11.0625Z" />
                    </svg>
                    <h6>Dashboard</h6>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/my-auction">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M0.576752 14.7397C1.06384 15.2274 1.85313 15.2276 2.34107 14.7397L8.75357 8.32749L9.71579 9.28972C9.36131 9.64867 9.36219 10.2284 9.71942 10.5856L10.2652 11.1317C10.6232 11.4902 11.2074 11.4906 11.5658 11.1317L14.8359 7.8616C15.1945 7.50301 15.1945 6.91991 14.8359 6.56128L14.2898 6.0152C13.9331 5.65797 13.3526 5.65681 12.9937 6.01157L9.30489 2.3228C9.65937 1.96386 9.65849 1.38389 9.30127 1.02666L8.75519 0.480582C8.39712 0.121988 7.81321 0.121426 7.45462 0.480582L4.1848 3.75068C3.82621 4.10927 3.82621 4.69265 4.1848 5.05125L4.73088 5.59708C5.08681 5.953 5.66569 5.95726 6.02678 5.6007L6.98901 6.56293L0.576787 12.9754C0.0893805 13.4628 0.088607 14.2521 0.576752 14.7397ZM13.3776 6.40357C13.5173 6.26358 13.7612 6.26358 13.9014 6.40357L14.4475 6.94965C14.5916 7.09372 14.5926 7.32811 14.4475 7.4732L11.1774 10.7433C11.0374 10.8836 10.7936 10.8833 10.6536 10.7433L10.1078 10.1972C9.96368 10.0531 9.96266 9.81875 10.1078 9.67366C11.2649 8.51646 12.2299 7.55145 13.3776 6.40357ZM5.6428 5.20868C5.50281 5.34867 5.25925 5.34867 5.11926 5.20868L4.57317 4.66288C4.42917 4.51888 4.42801 4.28421 4.57317 4.13905L7.84299 0.868953C7.98298 0.728961 8.22654 0.728961 8.36681 0.868953L8.9129 1.41504C9.05806 1.5602 9.0569 1.79486 8.9129 1.93886L5.6428 5.20868ZM6.41557 5.21272L8.91694 2.7116L12.6049 6.39956L10.1038 8.90093L6.41557 5.21272ZM0.965123 13.3638L7.37734 6.95127L8.36516 7.93909L1.95266 14.3513C1.68846 14.6155 1.22876 14.615 0.965087 14.3513C0.692064 14.0783 0.692064 13.6369 0.965123 13.3638ZM16.7378 14.6636V14.0134C16.7378 13.3284 16.1804 12.771 15.4954 12.771H10.233C9.54803 12.771 8.99066 13.3284 8.99066 14.0134V14.6636C8.39673 14.7564 7.93953 15.2671 7.93953 15.8866V17.5144C7.9395 17.5505 7.94659 17.5862 7.96038 17.6195C7.97418 17.6529 7.99441 17.6832 8.01991 17.7087C8.04542 17.7342 8.07571 17.7544 8.10904 17.7682C8.14237 17.782 8.17809 17.7891 8.21417 17.7891H17.5143C17.5503 17.7891 17.5861 17.782 17.6194 17.7682C17.6527 17.7544 17.683 17.7342 17.7085 17.7087C17.734 17.6832 17.7542 17.6529 17.768 17.6195C17.7818 17.5862 17.7889 17.5505 17.7889 17.5144V15.8866C17.7889 15.2671 17.3317 14.7564 16.7378 14.6636ZM9.53998 14.0134C9.53998 13.6312 9.85083 13.3203 10.233 13.3203H15.4954C15.8777 13.3203 16.1885 13.6312 16.1885 14.0134V14.6442H9.53998V14.0134ZM17.2397 17.2397H8.48884V15.8866C8.48884 15.5044 8.79969 15.1935 9.18191 15.1935H16.5466C16.9288 15.1935 17.2397 15.5044 17.2397 15.8866V17.2397Z" />
                      </g>
                    </svg>
                    <h6>My Auction</h6>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/payment">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M17.1816 9.07549V6.54563C17.1816 5.68778 16.5162 4.99012 15.6755 4.92247L13.326 0.818843C13.1083 0.439316 12.7568 0.168054 12.3361 0.0554156C11.9174 -0.0564561 11.4796 0.00229861 11.1048 0.220404L3.05087 4.90928H1.63635C0.733897 4.90928 0 5.64314 0 6.54563V16.3636C0 17.2661 0.733859 18 1.63635 18H15.5452C16.4477 18 17.1816 17.2661 17.1816 16.3636V13.8338C17.6567 13.6643 17.9997 13.2145 17.9997 12.6819V10.2274C17.9997 9.69476 17.6567 9.24493 17.1816 9.07549ZM14.7248 4.90928H11.1592L13.8334 3.35235L14.7248 4.90928ZM13.4269 2.64235L9.53311 4.90928H7.918L13.0231 1.93702L13.4269 2.64235ZM11.5167 0.927494C11.7017 0.819227 11.9178 0.790463 12.1243 0.845613C12.3333 0.90153 12.5075 1.03657 12.6157 1.22552L12.6166 1.22702L6.29201 4.90928H4.67698L11.5167 0.927494ZM16.3634 16.3636C16.3634 16.8147 15.9962 17.1818 15.5452 17.1818H1.63635C1.18533 17.1818 0.818194 16.8147 0.818194 16.3636V6.54563C0.818194 6.09461 1.18533 5.72747 1.63635 5.72747H15.5452C15.9962 5.72747 16.3634 6.09461 16.3634 6.54563V9.00013H13.9089C12.5554 9.00013 11.4544 10.1011 11.4544 11.4546C11.4544 12.8081 12.5554 13.9091 13.9089 13.9091H16.3634V16.3636ZM17.1816 12.6819C17.1816 12.9076 16.9982 13.091 16.7725 13.091H13.9089C13.0064 13.091 12.2725 12.3571 12.2725 11.4546C12.2725 10.5522 13.0064 9.81829 13.9089 9.81829H16.7725C16.9982 9.81829 17.1816 10.0016 17.1816 10.2274V12.6819Z" />
                        <path d="M13.908 10.6367C13.457 10.6367 13.0898 11.0039 13.0898 11.4549C13.0898 11.9059 13.457 12.273 13.908 12.273C14.359 12.273 14.7262 11.9059 14.7262 11.4549C14.7262 11.0039 14.3591 10.6367 13.908 10.6367Z" />
                      </g>
                    </svg>
                    <h6>Payment</h6>
                  </Link>
                </li>
                <li className="active">
                  <Link href="/dashboard/settings">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M9.84 18H8.16C7.88533 17.9997 7.62026 17.8989 7.41491 17.7165C7.20955 17.534 7.07814 17.2827 7.0455 17.01L6.86625 15.603C6.51207 15.488 6.16751 15.3454 5.83575 15.1763L4.71525 16.047C4.4989 16.2171 4.22747 16.3014 3.95283 16.284C3.67819 16.2666 3.41961 16.1486 3.2265 15.9525L2.04525 14.7712C1.85026 14.5783 1.73315 14.3204 1.71627 14.0466C1.69939 13.7728 1.78393 13.5024 1.95375 13.287L2.8245 12.1658C2.65477 11.8343 2.51206 11.4897 2.39775 11.1353L0.98775 10.956C0.715368 10.9224 0.464659 10.7904 0.282761 10.5849C0.100863 10.3793 0.00030711 10.1145 0 9.84L0 8.16C0 7.59225 0.42525 7.113 0.99 7.0455L2.397 6.86625C2.51196 6.51207 2.65465 6.16751 2.82375 5.83575L1.95375 4.71525C1.78325 4.49889 1.69867 4.22717 1.71625 3.95227C1.73383 3.67736 1.85233 3.41863 2.049 3.22575L3.23025 2.0445C3.42325 1.84966 3.6812 1.73265 3.95493 1.71578C4.22866 1.6989 4.49903 1.78334 4.7145 1.953L5.835 2.8245C6.16695 2.65527 6.51178 2.51257 6.86625 2.39775L7.0455 0.98775C7.113 0.42525 7.59225 0 8.16 0H9.84C10.4078 0 10.887 0.42525 10.9545 0.99L11.1337 2.397C11.4923 2.51325 11.8372 2.6565 12.165 2.82375L13.2855 1.953C13.5018 1.78271 13.7734 1.69826 14.0481 1.71584C14.3228 1.73342 14.5814 1.85179 14.7743 2.04825L15.9555 3.2295C16.3582 3.62025 16.3988 4.26 16.047 4.71375L15.1763 5.835C15.3443 6.16275 15.4875 6.50775 15.603 6.8655L17.013 7.04475C17.2852 7.07839 17.5357 7.2103 17.7175 7.41568C17.8992 7.62105 17.9997 7.88575 18 8.16V9.84C18 10.4078 17.5748 10.887 17.01 10.9545L15.603 11.1337C15.488 11.4879 15.3454 11.8325 15.1763 12.1642L16.047 13.2847C16.2173 13.5011 16.3017 13.7726 16.2842 14.0473C16.2666 14.3221 16.1482 14.5807 15.9517 14.7735L14.7705 15.9548C14.5777 16.1499 14.3197 16.2671 14.0459 16.284C13.772 16.3009 13.5016 16.2162 13.2863 16.0462L12.165 15.1755C11.8335 15.3452 11.4889 15.4879 11.1345 15.6022L10.9552 17.0123C10.9218 17.2846 10.7899 17.5353 10.5846 17.7172C10.3792 17.8991 10.1144 17.9997 9.84 18ZM5.7975 14.355C5.85975 14.355 5.9235 14.3707 5.9805 14.4022C6.40142 14.6366 6.84784 14.8218 7.311 14.9542C7.38141 14.9745 7.44436 15.0148 7.49207 15.0704C7.53979 15.126 7.57018 15.1943 7.5795 15.267L7.7895 16.917C7.812 17.1052 7.97475 17.25 8.16 17.25H9.84C9.93093 17.2488 10.0184 17.2148 10.0863 17.1543C10.1542 17.0939 10.198 17.0109 10.2098 16.9207L10.4205 15.2677C10.4298 15.1951 10.4602 15.1268 10.5079 15.0712C10.5556 15.0156 10.6186 14.9752 10.689 14.955C11.1522 14.8225 11.5986 14.6373 12.0195 14.403C12.0837 14.3671 12.1571 14.351 12.2305 14.3566C12.3039 14.3622 12.374 14.3893 12.432 14.4345L13.7445 15.4545C13.8152 15.5114 13.9044 15.5403 13.995 15.5355C14.0856 15.5308 14.1713 15.4929 14.2358 15.429L15.4245 14.2402C15.4895 14.1759 15.5285 14.0897 15.5339 13.9983C15.5393 13.907 15.5107 13.8169 15.4537 13.7452L14.4338 12.4327C14.3886 12.3747 14.3616 12.3046 14.356 12.2312C14.3504 12.1579 14.3665 12.0845 14.4022 12.0203C14.6366 11.5993 14.8218 11.1529 14.9542 10.6898C14.9745 10.6193 15.0148 10.5564 15.0704 10.5087C15.126 10.461 15.1943 10.4306 15.267 10.4213L16.917 10.2113C17.0079 10.1999 17.0917 10.1561 17.1529 10.0878C17.214 10.0196 17.2485 9.93162 17.25 9.84V8.16C17.2488 8.06907 17.2148 7.98163 17.1543 7.91372C17.0939 7.84581 17.0109 7.80197 16.9207 7.79025L15.2677 7.5795C15.1951 7.57018 15.1268 7.53979 15.0712 7.49207C15.0156 7.44436 14.9752 7.38141 14.955 7.311C14.8225 6.84784 14.6373 6.40142 14.403 5.9805C14.3669 5.91632 14.3507 5.84289 14.3563 5.76948C14.3619 5.69607 14.3891 5.62596 14.4345 5.568L15.4545 4.2555C15.5116 4.18509 15.5407 4.09605 15.5361 4.00551C15.5315 3.91497 15.4936 3.82931 15.4298 3.765L14.241 2.57625C14.1769 2.51076 14.0906 2.47149 13.9991 2.46609C13.9076 2.46068 13.8174 2.48952 13.746 2.547L12.4335 3.567C12.3753 3.61228 12.3051 3.63942 12.2316 3.64503C12.1581 3.65063 12.0846 3.63445 12.0203 3.5985C11.5994 3.36399 11.153 3.17877 10.6898 3.0465C10.6193 3.02629 10.5564 2.9859 10.5087 2.93032C10.461 2.87474 10.4306 2.80641 10.4213 2.73375L10.2113 1.08375C10.2 0.992692 10.1563 0.908757 10.0881 0.847421C10.0198 0.786085 9.93173 0.751484 9.84 0.75H8.16C8.06907 0.751226 7.98163 0.785191 7.91372 0.845666C7.84581 0.906141 7.80197 0.989072 7.79025 1.07925L7.5795 2.73225C7.57013 2.80497 7.53974 2.87338 7.49204 2.92907C7.44434 2.98477 7.38142 3.02532 7.311 3.04575C6.84779 3.17776 6.40134 3.36273 5.9805 3.597C5.91622 3.63305 5.84274 3.64936 5.76924 3.64389C5.69574 3.63842 5.62549 3.61142 5.56725 3.56625L4.25475 2.54625C4.18434 2.48915 4.0953 2.46009 4.00476 2.46466C3.91422 2.46923 3.82856 2.5071 3.76425 2.571L2.5755 3.7605C2.51047 3.82489 2.47152 3.91104 2.46612 4.0024C2.46072 4.09376 2.48926 4.18389 2.54625 4.2555L3.56625 5.568C3.61138 5.62609 3.63843 5.69617 3.64403 5.76951C3.64963 5.84286 3.63354 5.91623 3.59775 5.9805C3.36313 6.40127 3.17791 6.84772 3.04575 7.311C3.02554 7.38141 2.98515 7.44436 2.92957 7.49207C2.87399 7.53979 2.80566 7.57018 2.733 7.5795L1.083 7.7895C0.992079 7.80055 0.908243 7.84418 0.847018 7.9123C0.785792 7.98042 0.751326 8.06842 0.75 8.16V9.84C0.75 10.0252 0.89475 10.188 1.07925 10.2098L2.73225 10.4205C2.80491 10.4298 2.87324 10.4602 2.92882 10.5079C2.9844 10.5556 3.02479 10.6186 3.045 10.689C3.18 11.1585 3.366 11.6062 3.597 12.0195C3.63307 12.0837 3.64933 12.1571 3.64373 12.2305C3.63812 12.3039 3.6109 12.374 3.5655 12.432L2.5455 13.7445C2.4884 13.8149 2.45934 13.904 2.46391 13.9945C2.46848 14.085 2.50635 14.1707 2.57025 14.235L3.759 15.4237C3.82331 15.4889 3.90948 15.528 4.00089 15.5334C4.09229 15.5388 4.18246 15.5102 4.254 15.453L5.5665 14.433C5.63306 14.3827 5.7141 14.3554 5.7975 14.355Z" />
                        <path d="M9 12.75C6.93225 12.75 5.25 11.0678 5.25 9C5.25 6.93225 6.93225 5.25 9 5.25C11.0678 5.25 12.75 6.93225 12.75 9C12.75 11.0678 11.0678 12.75 9 12.75ZM9 6C7.3455 6 6 7.3455 6 9C6 10.6545 7.3455 12 9 12C10.6545 12 12 10.6545 12 9C12 7.3455 10.6545 6 9 6Z" />
                      </g>
                    </svg>
                    <h6>Settings</h6>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/change-password">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M9 0C6.1875 0 3.9375 2.25 3.9375 5.0625V7.3125C2.98125 7.3125 2.25 8.04375 2.25 9V16.3125C2.25 17.2687 2.98125 18 3.9375 18H14.0625C15.0188 18 15.75 17.2687 15.75 16.3125V9C15.75 8.04375 15.0188 7.3125 14.0625 7.3125V5.0625C14.0625 2.25 11.8125 0 9 0ZM14.625 9V16.3125C14.625 16.65 14.4 16.875 14.0625 16.875H3.9375C3.6 16.875 3.375 16.65 3.375 16.3125V9C3.375 8.6625 3.6 8.4375 3.9375 8.4375H14.0625C14.4 8.4375 14.625 8.6625 14.625 9ZM5.0625 7.3125V5.0625C5.0625 2.86875 6.80625 1.125 9 1.125C11.1938 1.125 12.9375 2.86875 12.9375 5.0625V7.3125H5.0625Z" />
                        <path d="M9 10.1248C8.04375 10.1248 7.3125 10.856 7.3125 11.8123C7.3125 12.5435 7.7625 13.1623 8.4375 13.3873V14.6248C8.4375 14.9623 8.6625 15.1873 9 15.1873C9.3375 15.1873 9.5625 14.9623 9.5625 14.6248V13.3873C10.2375 13.1623 10.6875 12.5435 10.6875 11.8123C10.6875 10.856 9.95625 10.1248 9 10.1248ZM9 12.3748C8.6625 12.3748 8.4375 12.1498 8.4375 11.8123C8.4375 11.4748 8.6625 11.2498 9 11.2498C9.3375 11.2498 9.5625 11.4748 9.5625 11.8123C9.5625 12.1498 9.3375 12.3748 9 12.3748Z" />
                      </g>
                    </svg>
                    <h6>Changed Password</h6>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/help-and-support">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M15.5059 7.44059H15.4613V6.34901C15.4613 2.84255 12.6188 0 9.11233 0C5.60583 0 2.76332 2.84255 2.76332 6.34901V7.44059H2.49601C1.51581 7.44059 0.758392 8.30938 0.758392 9.31189V12.0965C0.733703 13.0682 1.50139 13.8759 2.47303 13.9005C2.48071 13.9008 2.48834 13.9009 2.49601 13.901H4.14452C4.37801 13.89 4.55842 13.6918 4.54742 13.4583C4.54704 13.4499 4.5464 13.4415 4.5455 13.4331V7.97521C4.5455 7.7079 4.38957 7.44055 4.14452 7.44055H3.65441V6.34897C3.65441 3.33466 6.09803 0.891048 9.11233 0.891048C12.1266 0.891048 14.5702 3.33466 14.5702 6.34897V7.44055H14.0801C13.8351 7.44055 13.6792 7.70786 13.6792 7.97521V13.4331C13.6543 13.6656 13.8226 13.8742 14.055 13.899C14.0633 13.8999 14.0717 13.9005 14.0801 13.9009H14.5925L14.5479 13.9677C14.2183 14.4059 13.7908 14.7609 13.2996 15.0046C12.8084 15.2483 12.2671 15.3738 11.7187 15.3712C11.4754 14.1778 10.3105 13.4075 9.11706 13.651C8.09648 13.8591 7.36064 14.7529 7.35241 15.7945C7.3646 17.0161 8.35846 18 9.58013 17.9999C10.1849 17.9901 10.7614 17.7419 11.1841 17.3093C11.4693 17.0172 11.6562 16.6434 11.7187 16.24C12.4054 16.2426 13.0832 16.0849 13.6981 15.7793C14.313 15.4738 14.8481 15.0289 15.2608 14.4801L15.6841 13.8563C16.642 13.7895 17.2435 13.188 17.2435 12.3192V9.53456C17.2435 8.57673 16.5307 7.44059 15.5059 7.44059ZM3.65441 13.0099H2.49601C2.01631 12.9982 1.6369 12.5999 1.64859 12.1202C1.6488 12.1123 1.6491 12.1044 1.64948 12.0965V9.31185C1.64948 8.79949 2.00591 8.33164 2.49601 8.33164H3.65441V13.0099ZM10.5381 16.6856C10.4159 16.8181 10.2679 16.924 10.1031 16.9968C9.93832 17.0696 9.76033 17.1078 9.58018 17.1089C8.85538 17.0974 8.26721 16.519 8.24354 15.7945C8.24324 15.0686 8.83146 14.4799 9.55736 14.4796C10.2833 14.4793 10.872 15.0676 10.8723 15.7935V15.7945C10.8814 15.9581 10.8565 16.1218 10.7989 16.2752C10.7414 16.4286 10.6526 16.5684 10.5381 16.6856ZM16.3524 12.3193C16.3524 12.9208 15.7732 13.0099 15.5059 13.0099H14.5702V8.33168H15.5059C15.996 8.33168 16.3524 9.02228 16.3524 9.53464V12.3193Z" />
                      </g>
                    </svg>
                    <h6>Help &amp; Support</h6>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M10.125 15.75H7.125C7.02554 15.75 6.93016 15.7105 6.85983 15.6402C6.78951 15.5698 6.75 15.4745 6.75 15.375C6.75 15.2755 6.78951 15.1802 6.85983 15.1098C6.93016 15.0395 7.02554 15 7.125 15H10.125C10.7452 15 11.25 14.4953 11.25 13.875V10.125C11.25 10.0255 11.2895 9.93016 11.3598 9.85983C11.4302 9.78951 11.5255 9.75 11.625 9.75C11.7245 9.75 11.8198 9.78951 11.8902 9.85983C11.9605 9.93016 12 10.0255 12 10.125V13.875C12 14.9085 11.1592 15.75 10.125 15.75ZM17.625 8.25H10.125C10.0255 8.25 9.93016 8.21049 9.85983 8.14017C9.78951 8.06984 9.75 7.97446 9.75 7.875C9.75 7.77554 9.78951 7.68016 9.85983 7.60983C9.93016 7.53951 10.0255 7.5 10.125 7.5H17.625C17.7245 7.5 17.8198 7.53951 17.8902 7.60983C17.9605 7.68016 18 7.77554 18 7.875C18 7.97446 17.9605 8.06984 17.8902 8.14017C17.8198 8.21049 17.7245 8.25 17.625 8.25Z" />
                        <path d="M6 18C5.835 18 5.67375 17.9722 5.5215 17.9183L1.029 16.4205C0.729994 16.3218 0.469657 16.1315 0.284947 15.8765C0.100236 15.6216 0.000535999 15.3149 0 15L0 1.5C0 0.67275 0.67275 0 1.5 0C1.6665 0 1.8285 0.02775 1.97925 0.0825L6.471 1.5795C6.77013 1.67795 7.0306 1.86823 7.21534 2.12326C7.40008 2.37829 7.49969 2.68509 7.5 3V16.5C7.5 17.3272 6.82725 18 6 18ZM1.5 0.75C1.086 0.75 0.75 1.08675 0.75 1.5V15C0.750643 15.1575 0.800828 15.3107 0.893442 15.4381C0.986055 15.5654 1.1164 15.6604 1.266 15.7095L5.766 17.2095C6.258 17.3842 6.75 16.9905 6.75 16.5V3C6.74966 2.84256 6.69957 2.68925 6.60691 2.56197C6.51424 2.43469 6.38373 2.33994 6.234 2.29125L1.734 0.79125C1.65897 0.764072 1.5798 0.750116 1.5 0.75Z" />
                        <path d="M11.625 6C11.5255 6 11.4302 5.96049 11.3598 5.89016C11.2895 5.81984 11.25 5.72446 11.25 5.625V1.875C11.25 1.25475 10.7453 0.75 10.125 0.75H1.5C1.40054 0.75 1.30516 0.710491 1.23483 0.640165C1.16451 0.569839 1.125 0.474456 1.125 0.375C1.125 0.275544 1.16451 0.180161 1.23483 0.109835C1.30516 0.0395088 1.40054 0 1.5 0L10.125 0C11.1593 0 12 0.8415 12 1.875V5.625C12 5.72446 11.9605 5.81984 11.8902 5.89016C11.8198 5.96049 11.7245 6 11.625 6ZM14.625 11.25C14.5509 11.25 14.4784 11.228 14.4168 11.1868C14.3552 11.1457 14.3071 11.0872 14.2787 11.0187C14.2503 10.9503 14.2428 10.875 14.2572 10.8023C14.2716 10.7295 14.3072 10.6627 14.3595 10.6103L17.094 7.87575L14.3595 5.14125C14.2912 5.07052 14.2534 4.9758 14.2542 4.87747C14.2551 4.77915 14.2945 4.6851 14.3641 4.61557C14.4336 4.54604 14.5277 4.5066 14.626 4.50575C14.7243 4.50489 14.819 4.54269 14.8898 4.611L17.8898 7.611C17.9601 7.68132 17.9995 7.77669 17.9995 7.87613C17.9995 7.97556 17.9601 8.07093 17.8898 8.14125L14.8898 11.1412C14.8193 11.211 14.7241 11.2501 14.625 11.25Z" />
                      </g>
                    </svg>
                    <h6>Logout</h6>
                  </a>
                </li>
              </ul>
            </div>
            <div className="dashboard-content-wrap two">
              <div className="settings-wrap">
                <div className="edit-info-area mb-30">
                  <h6>Edit Your Profile Picture</h6>
                  <div className="edit-profile-img-area">
                    <div className="profile-img">
                      <img
                        src="/assets/img/inner-pages/dashbaord-edit-profile-img.png"
                        alt=""
                      />
                    </div>
                    <div className="upload-img-area">
                      <h6>Upload Your Image</h6>
                      <form>
                        <div className="upload-filed">
                          <input type="file" />
                        </div>
                      </form>
                      <span>JPEG 100 x 100</span>
                    </div>
                  </div>
                </div>
                <div className="edit-info-area">
                  <h6>Edit Your Information</h6>
                  <form className="edit-info-form">
                    <div className="row">
                      <div className="col-md-6 mb-30">
                        <div className="form-inner">
                          <label>First Name</label>
                          <input type="text" placeholder="Md. Rofiqul" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-30">
                        <div className="form-inner">
                          <label>Last Name</label>
                          <input type="text" placeholder="Islam" />
                        </div>
                      </div>
                      <div className="col-md-12 mb-50">
                        <div className="form-inner">
                          <label>Your Address</label>
                          <input
                            type="text"
                            placeholder="House 168/170, Road 02, Avenue 01, Mirpur DOHS, Dhaka, Bangladesh"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-30">
                        <div className="verify-area">
                          <div className="form-inner">
                            <label>Email Address</label>
                            <input
                              type="email"
                              placeholder="shimanto.nits@gmail.com"
                            />
                          </div>
                          <button className="primary-btn btn-hover two black-bg">
                            Verify Email
                            <span
                              style={{ top: "40.5px", left: "84.2344px" }}
                            />
                          </button>
                        </div>
                      </div>
                      <div className="col-md-12 mb-60">
                        <div className="verify-area">
                          <div className="form-inner">
                            <label>Phone Number</label>
                            <input
                              type="text"
                              placeholder="+880 179 671 3831"
                            />
                          </div>
                          <button className="primary-btn btn-hover two black-bg">
                            Verify Phone
                            <span
                              style={{ top: "40.5px", left: "84.2344px" }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="primary-btn btn-hover two">
                      Save Changes
                      <span style={{ top: "40.5px", left: "84.2344px" }} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SettingsPage;
