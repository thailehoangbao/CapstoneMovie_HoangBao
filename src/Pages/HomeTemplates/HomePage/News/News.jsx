import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function News(props) {
    const [value, setValue] = React.useState(0);
    const [btnThuGon, setBtnThuGon] = useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <div className='pl-10 pr-10' id="News">
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="ml-20 mr-20">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Điện Ảnh 24h" {...a11yProps(0)} />
                        <Tab label="Review" {...a11yProps(1)} />
                        <Tab label="Khuyến Mãi" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                {btnThuGon ?
                    <div>
                        <CustomTabPanel value={value} index={0}>
                            <div className='grid grid-cols-2 gap-4 pl-10 pr-10'>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png" alt="" />
                                    <h1 className='text-lg hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>TENET công bố ngày khởi chiếu chính thức tại Việt Nam</h1>
                                    <p className='p-2'>Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.</p>
                                </div>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2020/07/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg" alt="" />
                                    <h1 className='text-lg hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h1>
                                    <p className='p-2'>Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô Hình mang đến một góc nhìn mới về hình ảnh những người phụ nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về hai người phụ nữ cùng hợp sức để vạch mặt tên tội phạm có sở thích bệnh hoạn với phụ nữ.</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 gap-4 mt-2 pl-10 pr-10'>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png" alt="" />
                                    <h1 className='text-md hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>Gerard Butler cùng bồ cũ Deadpool tham gia Greenland</h1>
                                    <p className='font-thin text-sm p-1'>Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra..</p>
                                </div>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2020/07/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518743844.png" alt="" />
                                    <h1 className='text-m6 hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>Diễn viên đặc biệt của Bằng Chứng Vô Hình</h1>
                                    <p className='font-thin text-sm p-1'>Bằng Chứng Vô Hình tiết lộ thêm với khán giả một diễn viên vô cùng đặc biệt, đi diễn như đi chơi và không hề nghe theo sự chỉ đạo của đ..</p>
                                </div>
                                <div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2020/07/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2020/07/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>Loạt Phim không thể bỏ lỡ trong tháng 7!</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2020/06/rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de-15929959532579.jpg" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>Ròm tung trailer cuộc sống dân chơi số đề!</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2020/06/antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them-15929866818923.jpg" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì thêm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <div className='grid grid-cols-2 gap-4 pl-10 pr-10'>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2020/03/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg" alt="" />
                                    <h1 className='text-lg hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn</h1>
                                    <p className='p-2'>Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.</p>
                                </div>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2020/03/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg" alt="" />
                                    <h1 className='text-lg hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân</h1>
                                    <p className='p-2'>Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 gap-4 mt-2 pl-10 pr-10'>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2020/02/review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh-15828835353362.jpg" alt="" />
                                    <h1 className='text-md hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>[Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người bệnh hoạn vô hình?</h1>
                                    <p className='font-thin text-sm p-1'>Phiên bản hiện đại của The Invisible Man là một trong những phim kinh dị xuất sắc nhất năm nay.</p>
                                </div>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2020/02/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608583110.jpg" alt="" />
                                    <h1 className='text-m6 hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>[Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ đâu xa</h1>
                                    <p className='font-thin text-sm p-1'>Brahms: The Boy II có những màn hù dọa ấn tượng nhưng cái kết lại không tương xứng với phần mở đầu hứa hẹn...</p>
                                </div>
                                <div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2020/02/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907793369.jpg" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>[Review] Nhím Sonic - Cười thả ga cùng chàng nhím siêu thanh!</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2020/02/review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang-15817967038683.jpg" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>Loạt Phim không thể bỏ lỡ trong tháng 7!</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2020/06/rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de-15929959532579.jpg" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>Ròm tung trailer cuộc sống dân chơi số đề!</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2020/06/antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them-15929866818923.jpg" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì thêm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <div className='grid grid-cols-2 gap-4 pl-10 pr-10'>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg" alt="" />
                                    <h1 className='text-lg hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>[123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang</h1>
                                    <p className='p-2'>123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao dịch khi đặt vé Bắc Kim Thang trên ứng dụng 123Phim.</p>
                                </div>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663933683466.jpg" alt="" />
                                    <h1 className='text-lg hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>Sinh Nhật Mega GS</h1>
                                    <p className='p-2'>Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 gap-4 mt-2 pl-10 pr-10'>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583511037699.jpg" alt="" />
                                    <h1 className='text-md hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>[123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa</h1>
                                    <p className='font-thin text-sm p-1'>Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi...</p>
                                </div>
                                <div>
                                    <img style={{ borderRadius: "8px" }} src="https://s3img.vcdn.vn/123phim/2019/05/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160162243.jpg" alt="" />
                                    <h1 className='text-m6 hover:text-orange-600 transition-all duration-500 cursor-pointer font-bold p-2'>[Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng</h1>
                                    <p className='font-thin text-sm p-1'>Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành tặng các Stars Hà Nội loạt phần quà siêu hấp dẫn...</p>
                                </div>
                                <div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2019/04/mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve-15563607309238.jpg" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2019/04/123phim-ban-la-fan-cung-marvel-15562538560772.jpg" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>[123Phim] Bạn Là Fan Cứng Marvel?</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2019/04/galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui-15561704693167.jpg" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>[Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng Vui</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-5 mb-6'>
                                        <div className='col-span-1 pr-2'>
                                            <img style={{ borderRadius: "4px" }} src="https://s3img.vcdn.vn/123phim/2019/04/mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve-15547979641987.jpg" alt="" />
                                        </div>
                                        <div className='col-span-4 pt-2 pl-1'>
                                            <p className='font-thin text-md cursor-pointer hover:text-orange-500 transition-all duration-500'>Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CustomTabPanel>
                    </div>
                    :
                    ''}
            </Box>
            {
                btnThuGon ?
                    <div className='text-center'>
                        <button className='bg-orange-500 hover:bg-orange-600 text-white mb-2 transition-all duration-500 py-2 px-4 rounded' onClick={() => {
                            setBtnThuGon(false);
                        }}>THU GỌN</button>
                    </div> :
                    <div className='text-center'>
                        <button className='bg-orange-500 hover:bg-orange-600 text-white mb-2 transition-all duration-500 py-2 px-4 rounded' onClick={() => {
                            setBtnThuGon(true);
                        }}>XEM THÊM</button>
                    </div>
            }
        </div>
    )
}
