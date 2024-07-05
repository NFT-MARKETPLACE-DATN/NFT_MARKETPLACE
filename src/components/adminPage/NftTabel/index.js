import React, { useState, useEffect, useLayoutEffect } from 'react'
import {
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  FormControl,
  Drawer,
  Menu,
  Box,
  Grid,
  Collapse,
  Card,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  CardHeader,
  CardMedia,
  Checkbox,
  Avatar,
  Tooltip,
  Button
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import _debounce from 'lodash/debounce';
import { size } from 'lodash';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'; 
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { MaterialReactTable } from 'material-react-table';
import tooltipIcon from '../../../images/logos/tooltip.svg';
import BaseSwitch from '../../../containers/BaseSwitch';
import SearchIcon from '../../../images/logos/SearchIcon.svg';
import CheckIcon from "../../../images/logos/CheckIcon.svg";
import CloseIcon from "../../../images/logos/CloseIcon.svg";
import {isArrayLength , arrayObjectOfUniques, formatDateByTz,formatString } from "../../../utils/helpers"
import NoDataComponent from '../../../containers/NoData';
import NftTabelStyle from "./NftTabelStyle";
import { getTransactionUser,getNftByAdmin,updateNftTrending  } from "../../../redux/actions";

const initialPagination= { pageIndex:1,pageSize:10};
const NftTabel = () =>{
    const {
        accountInfo={},
      } = useSelector(state => state.globalState || {});
    const {
      loading,
      dataNft=[],
      isUpdateStatus
    } = useSelector(state => state.adminState || {});
    const [pagination, setPagination] = useState(initialPagination);
    const [screenEl, setScreenEl] = useState({});
    const [dataNftState, setDataNftState] = useState([]);
    const [showIsTrending, setShowIsTreding] = useState(false);
    const [searchTerm,setSearchTerm] = useState(null);
    const [searchKey, setSearchKey] = useState(1);
    const [value, setValue] = useState(1);
    const [selectTab, setSelectTab] = useState(1);
    const [visibleColumn, setVisibleColumn] = useState({
      isTreding: false,
      address: true,
      nftName: true,
      nftImage: true,
      isListed : true,
      price : false
    });
    const dispatch = useDispatch();

    const handlerSearch = _debounce((envent)=>{
      const {value} = envent.target;
      const trimmedValue = value.trim();
      setSearchTerm(trimmedValue);
      setPagination(initialPagination);
      // debouncedApiCall(trimmedValue);
      // console.log(value);
    },1000);
    const handleChangeTab = (event, newValue) => {
        setSelectTab(newValue);
        setValue(newValue);
        setSearchTerm(null);
        setSearchKey(2);
        setScreenEl({})
      }
    useEffect(()=>{
        if(selectTab == 2){
            setVisibleColumn((pre)=>({
                ...pre,
                price : true,
                isListed : false
            }))
        }else{
            setVisibleColumn((pre)=>({
                ...pre,
                price : false,
                isListed : true
            }));
            setShowIsTreding(false);
        }
    },[selectTab])
    const columns = [
      {
        accessorKey: 'isTrending',
        header: (
          <div className="flex">
            <div className="label">Trending</div>
            <Tooltip
              title="NFT is trending on market"
              placement="top"
              arrow
            >
              <img src={tooltipIcon} alt="tooltip-icon" width={12} height={12} />
            </Tooltip>
          </div>
        ),
        size: 50,
        Cell: ({ row }) => (
          <Box>
            <Checkbox
              checked={row.original.isTrending == 1 ? true : false}
              onChange={event => {
                // console.log(event.target.checked);
                dispatch(
                  updateNftTrending({
                    nftID:row.original.id,
                    isTrending:event.target.checked

                    })
                )
              }}
              icon={
                <CheckBoxOutlineBlankOutlinedIcon
                  sx={{
                    '& path': { fill: '#707070' },
                  }}
                />
              }
              checkedIcon={
                <CheckBoxOutlinedIcon
                  sx={{
                    '& path': { fill: '#004B9E' },
                  }}
                />
              }
            />
          </Box>
        ),
      },
      {
          accessorKey: 'userAddress',
          header: 'User',
          size: 120,
          Cell: ({ row }) => (
            <Box >
                 <Tooltip   
                    title="View user address in explorer"
                    placement="top"
                    arrow>
                    <a 
                        href={`https://explorer.solana.com/address/${row.original.userAddress}?cluster=testnet`}//devnet
                        target="_blank"
                        role="button"
                        tabIndex="0"
                        style={{ color: 'black',textDecoration:'none' }}
                    >
                        {row.original.userAddress && `${formatString(row.original.userAddress)}` }
                    </a>
                </Tooltip>
            </Box>
          ),
      },
      {
            accessorKey: 'nftName',
            header: 'NFT',
            size: 120,
            Cell: ({ row }) => (
              <Box >
                <div className="nftName">
                  {row.original.nftName}
                </div>
              </Box>
            ),
      },
      {
              accessorKey: 'nftImage',
              header: 'Image',
              size: 180,
              Cell: ({ row }) => (
                <Box className='nftImgae'>
                    <img
                      alt={row.original.nftImage}
                      src={row.original.nftImage}
                      loading="lazy"
                      className="image"
                  />
                </Box>
              )
      },
      {
        accessorKey: 'isListed',
        header: 'List On Market',
        size: 100,
        Cell: ({ row }) => (
          <Box >
            {row.original.isList ? 
               <img className="isListed" src={CheckIcon} alt="list-icon" /> 
               :
               <img className="isListed" src={CloseIcon} alt="unlist-icon" />
            }
          </Box>
        ),
     },
     {
        accessorKey: 'price',
        header: 'Price',
        size: 100,
        Cell: ({ row }) => (
          <Box >
            <div className="Price">
              {row.original.price} SOL
            </div>
          </Box>
        ),
     },
      ];
    
    const data = [
      {
        isTrending:2,
        address:'asdfsadfdsaf',
        nftName: "3232323",
        nftImage:"fasdfsdf",
        isListed: true,
        price:2332
      }
    ]
    useEffect(()=>{
      getDataNft(1);
      setPagination({ ...pagination, pageIndex: 1});
    },[searchTerm,selectTab,isUpdateStatus])
    useEffect(() => {
        handleDataTransaction();
    }, [dataNft]);
    const handleDataTransaction =()=>{
        if(isArrayLength(dataNft,1)){
            setDataNftState((preValue)=>pagination?.pageIndex === 1 ? [...dataNft] : arrayObjectOfUniques([...preValue,...dataNft],'id'))
        }
        // else if(dataNft.length == 0){
        //   setDataNftState([])
        // }
        else{
          if(dataNft !== null && isArrayLength(dataNftState,1)){
            setDataNftState([])
          }
        }
      };
    const getDataNft = (pageIndex)=>{
      // console.log("fdsfds");
        dispatch(
          getNftByAdmin({
              pageIndex: pageIndex || pagination.pageIndex ,
              pageSize:pagination.pageSize,
              search:searchTerm,
              isList:selectTab == 2 ? true : false
            })
        )
    }
    const fetchNextPage =()=>{
        if(isArrayLength(dataNft, pagination?.pageSize)){
          getDataNft(pagination?.pageIndex + 1)
          setPagination((prevValue)=>({...prevValue, pageIndex: prevValue?.pageIndex + 1}))
        }
      };
    const debounceNextPage = _debounce(()=>{fetchNextPage()},500,{leading:true})
    const fetchMoreOnBottomReached =  (containerRefElement) => {
        const containerRefElementTarget = containerRefElement?.target
        if (containerRefElementTarget) {
          const { scrollLeft, scrollHeight, scrollTop, clientHeight, offsetHeight } = containerRefElementTarget;
          setScreenEl((prevValue)=>({...prevValue, scrollLeft, scrollTop}))
          if(screenEl?.scrollLeft !== scrollLeft) return
          //once the user has scrolled within 400px of the bottom of the table, fetch more data if we can
          const isScrollEnd = (scrollHeight - scrollTop) < clientHeight + 80;
          if (isScrollEnd && !loading && isArrayLength(dataNft, pagination?.pageSize)) {
            debounceNextPage();
          }
        }
    };
    return (
    <NftTabelStyle>
      <div className='tabAdmin'>
          </div>
          <div className='userTabel'>
            <div className='headerTabel'>
            <div className="flex onOffSwitch">
              {selectTab == 2 ? 
                  <>
                  <div className="onOffText">Add Trending</div>
                  <BaseSwitch
                    checked={showIsTrending}
                    onChange={event => {
                    setShowIsTreding(event.target.checked);
                    }}
                   />
                  </>
                 : 
                 <>
                  <div className="onOffText"></div>
                 </>
                 
              }
              </div>
              <div>
              <Tabs
                value={value}
                onChange={handleChangeTab}
                textColor='primary'
                indicatorColor='primary'
                // aria-label='secondary tabs example'
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                '& .MuiTab-root': {
                    minWidth: 120,
                    color: 'text.primary',
                    '&.Mui-selected': {
                    // color: 'white', // Color when tab is selected
                    // backgroundColor:'secondary.main',
                    borderRadius: '8px',
                    underline: 'none',
                    },
                    '&:hover': {
                    // backgroundColor: 'action.hover', // Color when tab is hovered
                    },
                    
                },
                // '& .MuiTabs-indicator':{
                //     display:'none'
                // },
                // '& .MuiTabs-scrollButtons': {
                //     color: 'secondary.main',
                // },
                }}
            >
                <Tab value={1} className='tabSelect' label='ALL' />
                <Tab value={2} className='tabSelect' label='List on market' />
                {/* <Tab value={3} label='Marketplace' /> */}
            </Tabs>
              </div>
              <div className='search-accountpage'>
                  <TextField
                      key={searchKey}
                      className={`searchInput`}
                      fullWidth
                      hiddenLabel
                      placeholder="Search for name"
                      name="search"
                      type="text"
                      variant="outlined"
                      margin="dense"
                      autoComplete="off"
                      defaultValue={searchTerm || null}
                      // value={searchTerm === null ? '' : searchTerm}
                      onChange={handlerSearch}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              {searchTerm ? 
                                <>
                                </>
                                :
                                <img src={SearchIcon} alt="search-icon" />
                              }
                             
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                </div>
              
            </div>
         
            <MaterialReactTable
            columns={columns}
            data={dataNftState || []}
            enableExpandAll={false}
            enableTopToolbar={false}
            enableSorting={false}
            initialState={{}}
            renderEmptyRowsFallback={()=>(<NoDataComponent isShowText={true}/>)}
            enablePagination={false}
            state={{
              expanded: true,
              columnVisibility: {
                ...visibleColumn,
                'mrt-row-expand': false,
                isTrending: showIsTrending
              },
              pagination,
            }}
            muiTableContainerProps={{
              sx: {
                maxHeight: '500px',
              },
              onScroll: fetchMoreOnBottomReached
            }}
          //   rowCount={totalRecordsTransaction}
            manualPagination
            // onPaginationChange={(valuee)=>{console.log({valuee})}}
            // localization={MRT_Localization_JA}
            muiTablePaginationProps={{
              rowsPerPageOptions: [20],
            }}
            onColumnVisibilityChange={setVisibleColumn}
            positionExpandColumn="first"
            renderDetailPanel={({ row }) => (
              <div className="transactionDateTime">
                {formatDateByTz(row.original.created, 'YYYY/MM/DD HH:mm')}{' '}
              </div>
            )}
            muiTableBodyProps={
              {
                // children: 'Custom Table Body',
                // sx: () => ({
                //   '& tr:nth-child(even)': {
                //     backgroundColor: '#ccc',
                //   },
                // }),
              }
            }
            enableRowSelection={false}
            enableSelectAll={false}
            setRowSelection={setShowIsTreding}
            muiSelectCheckboxProps={{
              checkedIcon: ( <CheckBoxOutlinedIcon sx={{ '& path': { fill: '#004B9E' } }}/> ),
            }}
            enableFullScreenToggle={false}
            enableDensityToggle={false}
            enableColumnActions={false}
            enableColumnFilters={false}
            enableGlobalFilter={false}
            // enableHiding={!!matches}
            displayColumnDefOptions={{
              'mrt-row-actions': {
                size: 20,
                sx: {
                  cursor: 'pointer',
                },
              },
              'mrt-row-expand': {
                size: 20,
                header: <></>,
                muiTableHeadCellProps: {
                  align: 'right',
                  padding:'0px 8px 0px 8px'
                },
                muiTableBodyCellProps: {
                  align: 'right',
                },
              },
              'mrt-row-select': {
                // header: (
                //   <div className="flex">
                //     <div className="label">Trending</div>
                //     <Tooltip
                //       title="NFT is trending on market"
                //       placement="top"
                //       arrow
                //     >
                //       <img
                //         src={tooltipIcon}
                //         alt="tooltip-icon"
                //         width={12}
                //         height={12}
                //       />
                //     </Tooltip>
                //   </div>
                // ),
              },
            }}
            muiTableBodyCellProps={{
              sx: {
                fontWeight: 'normal',
                fontSize: 18,
              },
            }}
            muiTableHeadCellProps={{
              sx: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#707070',
                '& .Mui-TableHeadCell-Content': {
                  justifyContent: 'space-between',
                },
              },
            }}

          />
        </div>
    </NftTabelStyle>
)
}

export default React.memo(NftTabel);