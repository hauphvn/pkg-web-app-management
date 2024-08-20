export interface IProduct {
    productID: string;
    productName: string;
    productCode?: string;
    store?: string;
    warranty?: string;
    unit?: string;
    importPrice?: string;
    salePrice: string;
    discount?: string;
    priceAfterDiscount?: string;
    quantity?: string;
    weight?: string;
    length?: string;
    width?: string;
    height?: string;
    isContactPrice?: boolean;
    isOnlineSale?: boolean;
}

export interface IResProduct {
    key: string;
    productID: string;
    productName: string;
    image: string;
    productCode: string;
    amount: string;
    price: string;
}

export interface IResProductEditSelected {
    productID: string;
    productName: string;
    productCode: string;
    quantity: string;
    actionType: 'update' | 'delete' | 'import-warehouse' |'printer' | 'unknown';
    salePrice: string;
}
export interface UserInfo {
    IDNguoiDung: number;
    TaiKhoan: string;
    MatKhau: string;
    Ho: string;
    Ten: string;
    GioiTinh: number;
    TenNguoiDung: string | null;
    DienThoai: string | null;
    Email: string;
    CMND: string | null;
    NgaySinhNhat: string;
    IDVaiTro: number;
    VaiTro: string;
    IDCuaHang: number;
    ChuDe: string;
    DiaChi: string | null;
    ThanhPho: string | null;
    DienThoaiKhachHang: string;
    EmailKhachHang: string | null;
    TenQuan: string | null;
    TenBang: string | null;
    TenKhachHang: string;
    MaQuocGia: string | null;
    TenQuocGia: string | null;
    MaBang: string | null;
    IDKhachHang: number;
    NhanEmail: number;
}

export interface Role {
    RoleId: number;
    RoleName: string;
    RoleCode: string;
    RolesChild: never[];
}
export interface StoreInfo {
    IDCuaHang: number;
    MaCuaHang: string;
    TenCuaHang: string;
    URLLogo: string;
    DiaChiCuaHang: string;
    DienThoaiCuaHang: string;
    EmailCuaHang: string;
    TenNguoiDaiDienCuaHang: string;
    DiaChiWebCuaHang: string;
    IDCuaHangCha?: number | null;
    CapDoCuaHang?: number | null;
    ThanhPho: string;
    MaBang: string;
    MaQuocGia: string;
    TenBang: string;
    TenQuocGia: string;
    TenQuan: string;
}

export interface Permission {
    IdchuyenMuc: number;
    MaChuyenMuc: string;
    TenChuyenMuc: string;
    LoaiChuyenMuc: string;
    CapDoChuyenMuc: number;
    Thuoc: string;
    MinWidthScreen: number;
    NgayHeThong: string;
    IsFavoriteMenu: boolean;
    IsFastMenu: boolean;
}

export interface UserData {
    UserInfo: UserInfo;
    StoreInfo: StoreInfo;
    Role: Role;
    Permissions: Permission[];
    Token: string;
    RefreshToken: string;
    EnvTypeCode: string;
    ApiUrl: string;
}
